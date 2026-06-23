# API: Tạo Lead từ Website (Public Web Form)

Tài liệu mô tả endpoint công khai để website / landing page bên ngoài gửi thông tin đăng ký (lead) vào hệ thống Lead Management.

---

## 1. Tổng quan

| Mục | Giá trị |
|---|---|
| **Method** | `POST` |
| **Path** | `/api/leads/web` |
| **URL đầy đủ** | `https://<domain>/api/leads/web` |
| **Content-Type** | `application/json` |
| **Xác thực** | API Key qua header `x-api-key` |
| **Public** | ✅ Không cần đăng nhập / không cần JWT cookie |

---

## 2. Xác thực (Authentication)

Mỗi request **bắt buộc** gửi kèm header:

```
x-api-key: <WEB_LEADS_API_KEY>
```

- Giá trị phải khớp chính xác với biến môi trường `WEB_LEADS_API_KEY` trên server.
- Nếu thiếu hoặc sai → trả về `401 Unauthorized`.


---

## 3. Request Body

`Content-Type: application/json`

| Field | Kiểu | Bắt buộc | Mô tả / Ràng buộc |
|---|---|:---:|---|
| `name` | string | ✅ | Họ tên người đăng ký. Tối thiểu 1 ký tự. |
| `email` | string | ✅ | Email hợp lệ. **Không được trùng** với lead đang tồn tại trong hệ thống. |
| `industry` | string | ✅ | Ngành nghề. Tối thiểu 1 ký tự. |
| `companySize` | enum | ✅ | Quy mô công ty. Chỉ nhận: `"20-50"`, `"50-100"`, `"100-500"`, `"500+"`. |
| `company` | string | ❌ | Tên công ty. |
| `jobTitle` | string | ❌ | Chức danh. |
| `challenge` | string | ❌ | Thử thách vận hành. **Tối đa 300 ký tự.** |
| `preferMeetingDate` | string | ❌ | Ngày mong muốn họp/tư vấn (dạng chuỗi tự do, vd `"2026-06-25"`). |
| `preferMeetingTime` | string | ❌ | Giờ mong muốn họp/tư vấn (vd `"14:00"`). |

### Ví dụ body

```json
{
  "name": "Nguyễn Văn A",
  "email": "vana@company.com",
  "industry": "Bán lẻ",
  "companySize": "50-100",
  "company": "Công ty ABC",
  "jobTitle": "Giám đốc vận hành",
  "challenge": "Khó kiểm soát tồn kho và đơn hàng đa kênh",
  "preferMeetingDate": "2026-06-25",
  "preferMeetingTime": "14:00"
}
```

---

## 4. Response

### ✅ 201 Created — Thành công

```json
{
  "success": true,
  "message": "Lead được tạo thành công.",
  "leadId": "clxxxxx..."
}
```

### ❌ 401 Unauthorized — Sai/thiếu API Key

```json
{
  "error": "Unauthorized",
  "message": "API Key không hợp lệ hoặc thiếu"
}
```

### ❌ 400 Bad Request — Dữ liệu không hợp lệ

```json
{
  "error": "Bad Request",
  "message": "Dữ liệu không hợp lệ",
  "details": {
    "email": ["Email không hợp lệ"],
    "companySize": ["Invalid enum value..."]
  }
}
```

### ❌ 400 Bad Request — Email đã tồn tại

```json
{
  "error": "Bad Request",
  "message": "Email đã tồn tại trong hệ thống"
}
```

### ❌ 500 Server Error

```json
{
  "error": "Server Error",
  "message": "Đã xảy ra lỗi trên hệ thống."
}
```

---

## 5. Hành vi hệ thống (để FE nắm rõ)

Khi tạo thành công, lead được tạo với các giá trị mặc định:

- `type`: `"A"` (Đang khám phá AI — phù hợp gói AI Audit)
- `workshopInterest`: `"not_sure"`
- `source`: `"xcorp.app"`
- Gán cho system user `system@xcorp.app` (tự tạo nếu chưa tồn tại)
- `challenge`, `preferMeetingDate`, `preferMeetingTime` được lưu vào `momTestAnswers`
- Nếu server cấu hình `AUTOMATION_WEBHOOK_URL`, hệ thống sẽ bắn webhook sự kiện `lead.created` chạy ngầm (không ảnh hưởng tới response trả về FE).

---

## 6. Ví dụ tích hợp

### cURL

```bash
curl -X POST https://<domain>/api/leads/web \
  -H "Content-Type: application/json" \
  -H "x-api-key: $WEB_LEADS_API_KEY" \
  -d '{
    "name": "Nguyễn Văn A",
    "email": "vana@company.com",
    "industry": "Bán lẻ",
    "companySize": "50-100",
    "company": "Công ty ABC",
    "challenge": "Khó kiểm soát tồn kho"
  }'
```

### JavaScript (gọi từ server-side / BFF — KHÔNG để lộ key ở client)

```js
const res = await fetch('https://<domain>/api/leads/web', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.WEB_LEADS_API_KEY, // giữ ở server
  },
  body: JSON.stringify({
    name: 'Nguyễn Văn A',
    email: 'vana@company.com',
    industry: 'Bán lẻ',
    companySize: '50-100',
    company: 'Công ty ABC',
    challenge: 'Khó kiểm soát tồn kho',
  }),
})

const data = await res.json()
if (!res.ok) {
  // xử lý lỗi theo data.error / data.message / data.details
  throw new Error(data.message)
}
console.log('Created lead:', data.leadId)
```

---

## 7. Checklist phía Backend (cấu hình môi trường)

Để endpoint hoạt động trên production, cần đảm bảo các biến môi trường sau được khai báo (trong `.env`, `docker-compose.yml`, và script tạo `.env` trong `.gitlab-ci.yml`):

- `WEB_LEADS_API_KEY` — **bắt buộc**, key dùng để FE/website xác thực.
- `AUTOMATION_WEBHOOK_URL` — *tùy chọn*, URL nhận webhook `lead.created`.
- `AUTOMATION_WEBHOOK_KEY` — *tùy chọn*, gửi kèm header `AUTO-HOOK-KEY` khi gọi webhook.

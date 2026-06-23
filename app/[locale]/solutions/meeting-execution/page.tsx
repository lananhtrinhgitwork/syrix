'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Mic, Send, ServerCog, Activity, Headphones } from 'lucide-react';
import { ProductHero } from '@/components/ui/product-hero';
import { FAQSection } from '@/components/ui/faq-section';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { UseCaseFlow } from '@/components/ui/use-case-flow';
import { EcosystemGrid } from '@/components/ui/ecosystem-grid';
import { MetricsBanner } from '@/components/ui/metrics-banner';

export default function MeetingExecutionSolution() {
  const t = useTranslations('solutions.meetingExecution');
  const locale = useLocale();

  const faqs = locale === 'vi' ? [
    { question: "Hệ thống có nhận diện được nhiều người nói cùng lúc không?", answer: "Có. Thuật toán Diarization thế hệ mới cho phép tách chính xác nhiều giọng nói chồng chéo trong các cuộc họp đông người." },
    { question: "Tôi có thể ra lệnh bằng giọng nói khi đang lái xe không?", answer: "Có, bạn chỉ cần đọc một câu tóm tắt, Syrix sẽ phiên dịch giọng nói và tự động tạo ticket Jira hoặc gửi báo cáo vào Slack." }
  ] : [
    { question: "Can the system recognize multiple speakers simultaneously?", answer: "Yes. Our next-gen Diarization algorithms accurately separate overlapping voices in crowded meetings." },
    { question: "Can I issue voice commands while driving?", answer: "Yes, you can record a brief voice memo, and Syrix will transcribe it and automatically create Jira tickets or send Slack updates." }
  ];

  const HeroVisual = (
    <div className="flex flex-col gap-4 p-4 h-[300px] justify-center items-center relative">
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
           <div key={i} className="w-2 bg-cyan-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 40 + 20}px`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-2 rounded-full text-xs font-mono flex items-center gap-2">
         <Send className="w-3 h-3" /> {locale === 'vi' ? 'Tự tạo Ticket Jira thành công' : 'Auto-created Jira Ticket'}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pb-32">
      {/* 1. Hero */}
      <ProductHero 
        badge={t('badge')}
        title={t('heroTitle')}
        description={t('heroDesc')}
        ctaPrimary={locale === 'vi' ? 'Chuyển đổi Cuộc họp' : 'Transform Meetings'}
        mockupContent={HeroVisual}
      />

      {/* 2. Metrics */}
      <MetricsBanner 
        metrics={[
          { value: "5hrs", label: locale === 'vi' ? 'Tiết kiệm cho mỗi sếp / tuần' : 'Saved per manager / week' },
          { value: "100%", label: locale === 'vi' ? 'Theo dõi Cam kết' : 'Commitment Tracking' },
          { value: "0", label: locale === 'vi' ? 'Nhập liệu thủ công' : 'Manual Data Entry' }
        ]}
      />

      {/* 3. Architecture */}
      <ArchitectureDiagram 
        title={locale === 'vi' ? 'Giao thức Giọng nói thành Hành động' : 'The Voice-to-Action Protocol'} 
        description={locale === 'vi' ? 'Cách ngôn ngữ nói chuyển đổi mượt mà thành các thay đổi trạng thái hệ thống backend.' : 'How spoken language translates seamlessly into backend system state changes.'} 
      />

      {/* 4. Features Tabs */}
      <FeatureTabs 
        title={locale === 'vi' ? 'Tốc độ Điều hành Vô song' : 'Unrivaled Operational Momentum'}
        tabs={[
          {
            id: 'minutes',
            title: locale === 'vi' ? 'Biên bản cuộc họp tự động' : 'Automated Minutes',
            description: locale === 'vi' 
              ? 'Tự động chuyển đổi cuộc thoại 2 tiếng thành một bảng tóm tắt điều hành gồm các checkbox đầu việc gọn gàng.'
              : 'Instantly convert 2-hour conversational data into brief executive summaries with structured checkmarks.',
            visual: (
              <div className="w-full max-w-sm p-6 bg-card border border-white/10 rounded-lg shadow-xl text-sm">
                <div className="font-bold border-b border-white/10 pb-2 mb-2">{locale === 'vi' ? 'Cuộc họp: Kế hoạch Q3' : 'Meeting: Q3 Planning'}</div>
                <ul className="space-y-2 text-muted-foreground">
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {locale === 'vi' ? 'Đã duyệt ngân sách marketing.' : 'Budget approved for marketing.'}</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {locale === 'vi' ? 'Tạm dừng tuyển dụng đến Q4.' : 'Hiring paused until Q4.'}</li>
                </ul>
              </div>
            )
          },
          {
            id: 'jira',
            title: locale === 'vi' ? 'Đồng bộ Jira & Slack' : 'Jira & Slack Sync',
            description: locale === 'vi' 
              ? 'Agent tự đọc các hành động được trích xuất và độc lập gọi tool MCP để tạo task kỹ thuật trên Jira.'
              : 'The agent reads extracted action items and calls MCP tools to deploy engineering tasks autonomously.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full p-6">
                 <ServerCog className="w-12 h-12 text-primary mb-4" />
                 <span className="text-sm text-center">{locale === 'vi' ? 'Đang đồng bộ đầu việc lên bảng Jira...' : 'Syncing action items to Jira Board...'}</span>
              </div>
            )
          },
          {
            id: 'voice',
            title: locale === 'vi' ? 'Mệnh lệnh Di động' : 'On-the-Go Commands',
            description: locale === 'vi' 
              ? 'Quay nhanh voice thoại khi đang trên đường đi làm; Syrix tự dịch thoại tức thì và chỉ huy AI Agent thực thi luồng nghiệp vụ nội bộ.'
              : 'Record quick voice memos while commuting. Syrix transcribes it and executes internal workflows.',
            visual: (
              <div className="flex flex-col items-center justify-center h-full p-6">
                 <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center border border-primary/50 animate-pulse mb-4">
                    <Mic className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-xs bg-black/50 p-2 rounded">"{locale === 'vi' ? 'Mở ticket IT sửa lỗi kết nối VPN.' : 'Open an IT ticket to fix VPN access.'}"</div>
              </div>
            )
          }
        ]}
      />

      {/* 5. Use Cases */}
      <UseCaseFlow 
        title={locale === 'vi' ? 'Tình huống Điều hành' : 'Executive Scenarios'}
        useCases={[
          {
            title: locale === 'vi' ? 'Hao hụt thông tin sau cuộc họp' : 'Post-Meeting Friction',
            description: locale === 'vi' 
              ? 'Sau cuộc họp chiến lược, các trợ lý mất nửa ngày tổng hợp biên bản họp. Đầu việc bị bỏ quên, tiến độ dự án bị chậm. Syrix tự nghe âm thanh, tách biệt 8 người nói độc lập và tự động bắn task sang Jira.'
              : 'Following strategic meetings, administrative assistants spend half a day compiling summaries. Commitments evaporate and project momentum stalls. Syrix Speech to Text processes the audio, separates 8 unique speakers, and pushes structured tasks to Jira.',
            visual: (
               <div className="p-6 h-full flex flex-col items-center justify-center">
                  <Activity className="w-16 h-16 text-primary mb-4" />
                  <div className="text-lg font-bold text-white text-center">
                    {locale === 'vi' ? 'Đẩy nhanh Tiến độ Dự án' : 'Accelerate Project Momentum'}
                  </div>
               </div>
            )
          }
        ]}
      />

      {/* 6. Ecosystem */}
      <EcosystemGrid title={locale === 'vi' ? 'Kết nối với Hệ thống Họp của bạn' : 'Connects with your Meeting Stack'} />

      <FAQSection title={locale === 'vi' ? "Câu hỏi thường gặp" : "Frequently Asked Questions"} faqs={faqs} />
    </main>
  );
}

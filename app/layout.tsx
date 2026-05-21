import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syrix AI — AI Execution Platform for Enterprises",
  description: "Your AI shouldn't just answer questions. It should complete the work. Syrix connects large language models directly to your CRM, ERP, HRM, email, and knowledge bases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
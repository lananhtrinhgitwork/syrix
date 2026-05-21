import CTA from '@/components/layout/cta';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pb-32">
      <div className="container mx-auto px-4 py-24">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
        
        <div className="prose max-w-none text-sm text-muted-foreground">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Information We Collect</h2>
          <p className="mb-6">
            We collect information you provide directly to us, including:
          </p>
          <ul className="mb-6 list-disc pl-5 space-y-2">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Company information</li>
            <li>Usage data from our services</li>
          </ul>

          <h2 className="mb-4 text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p className="mb-6">
            We use your information to:
          </p>
          <ul className="mb-6 list-disc pl-5 space-y-2">
            <li>Provide and improve our services</li>
            <li>Communicate with you about your account</li>
            <li>Send marketing communications</li>
            <li>Analyze usage patterns</li>
          </ul>

          <h2 className="mb-4 text-xl font-semibold text-foreground">Data Storage & Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your data:
          </p>
          <ul className="mb-6 list-disc pl-5 space-y-2">
            <li>AES-256 encryption at rest</li>
            <li>TLS 1.3 encryption in transit</li>
            <li>Private cloud infrastructure</li>
            <li>Regular security audits</li>
            <li>Comprehensive access controls</li>
          </ul>

          <h2 className="mb-4 text-xl font-semibold text-foreground">Contact</h2>
          <p className="mb-6">
            If you have any questions about this privacy policy, please contact us at:
          </p>
          <p className="font-semibold">hello@syrix.ai</p>
        </div>

        <CTA />

      </div>
    </div>
  );
}
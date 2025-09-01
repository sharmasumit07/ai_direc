import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Agent Directory',
  description: 'Our privacy policy and data handling practices for the AI Agent Directory platform.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you use our chat feature, 
            subscribe to updates, or contact us for support.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            including our AI recommendation system and user experience.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our AI chat feature may use third-party AI services to provide recommendations. 
            We do not store or share your conversations with these services beyond what's 
            necessary to provide the service.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            privacy@ai-directory.com.
          </p>
        </div>
      </div>
    </div>
  );
}
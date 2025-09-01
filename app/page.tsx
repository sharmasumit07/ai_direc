import { HeroSection } from '@/components/hero-section';
import { CategoryCards } from '@/components/category-cards';
import { FeaturedAgents } from '@/components/featured-agents';
import { EmbeddedChatbot } from '@/components/embedded-chatbot';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection />
      <CategoryCards />
      <FeaturedAgents />
      <EmbeddedChatbot />
    </div>
  );
}
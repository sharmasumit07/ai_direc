import { ChatInterface } from '@/components/chat-interface';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chat Assistant - Get Personalized Tool Recommendations',
  description: 'Chat with our AI assistant to get personalized recommendations for AI tools and agents based on your specific needs and requirements.',
};

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <ChatInterface />
    </div>
  );
}
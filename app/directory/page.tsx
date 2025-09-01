import { DirectoryView } from '@/components/directory-view';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Directory - Browse All AI Tools',
  description: 'Browse and search through our comprehensive directory of AI agents and tools. Filter by category, search by name, and discover the perfect AI solution for your needs.',
};

export default function DirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DirectoryView />
    </div>
  );
}
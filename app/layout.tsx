import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingChatbot } from '@/components/floating-chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Agent Directory - Discover 10,000+ AI Tools',
  description: 'Discover and explore the best AI agents and tools for productivity, creativity, and development. Get personalized recommendations from our intelligent chatbot.',
  keywords: 'AI tools, AI agents, artificial intelligence, productivity, automation, chatbot, AI directory',
  authors: [{ name: 'AI Agent Directory' }],
  openGraph: {
    title: 'AI Agent Directory - Discover 10,000+ AI Tools',
    description: 'Discover and explore the best AI agents and tools for productivity, creativity, and development.',
    type: 'website',
    url: 'https://ai-agent-directory.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Directory - Discover 10,000+ AI Tools',
    description: 'Discover and explore the best AI agents and tools for productivity, creativity, and development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <FloatingChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
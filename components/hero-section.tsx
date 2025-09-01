import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-16 pb-12">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            AI Agent Directory
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover 10,000+ AI tools and agents for productivity, creativity, and development. 
            Get personalized recommendations from our intelligent chatbot.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/directory">
            <Button size="lg" className="flex items-center space-x-2 group">
              <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Explore Directory</span>
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="outline" size="lg" className="flex items-center space-x-2 group">
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>Chat with AI</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">10,000+</div>
            <div className="text-muted-foreground">AI Tools</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Categories</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">AI Assistant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
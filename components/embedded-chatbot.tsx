"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function EmbeddedChatbot() {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to chat page
    window.location.href = `/chat`;
  };

  return (
    <section className="container mx-auto px-4">
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-background via-background to-accent/5">
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-500 p-3">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-2xl">Get AI Tool Recommendations</CardTitle>
          <CardDescription className="text-base">
            Tell our AI assistant what you're looking for, and get personalized tool recommendations 
            with setup guides and expert insights.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              placeholder="e.g., I need an AI tool for creating product images..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Ask</span>
            </Button>
          </form>
          
          <div className="text-center">
            <Link href="/chat">
              <Button variant="outline" className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Open Full Chat Interface</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-accent/20 rounded-lg">
              <div className="font-medium">Example Questions:</div>
              <div className="text-muted-foreground mt-1">
                "Best AI for writing blog posts?"
              </div>
            </div>
            <div className="p-3 bg-accent/20 rounded-lg">
              <div className="font-medium">Get Recommendations:</div>
              <div className="text-muted-foreground mt-1">
                "Tools for video editing with AI?"
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, ArrowLeft, Lightbulb, BookOpen, Settings } from 'lucide-react';

interface Agent {
  name: string;
  slug: string;
  description: string;
  categories: string[];
  usageInstructions: string;
  setupGuide: string;
  externalLink: string;
  grokRecommendations: string;
}

interface AgentDetailClientProps {
  agent: Agent;
}

export function AgentDetailClient({ agent }: AgentDetailClientProps) {
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <div key={index} className="mb-2">
        {line}
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <Link href="/directory">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Directory
            </Button>
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{agent.name}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {agent.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {agent.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={agent.externalLink} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center space-x-2 group">
                  <span>Visit {agent.name}</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
              <Link href="/chat">
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>Ask AI for Similar Tools</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Separator />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Usage Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Usage Instructions</span>
              </CardTitle>
              <CardDescription>
                Step-by-step guide to using {agent.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {formatText(agent.usageInstructions)}
              </div>
            </CardContent>
          </Card>

          {/* Setup Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <span>Setup Guide</span>
              </CardTitle>
              <CardDescription>
                How to get started with {agent.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {formatText(agent.setupGuide)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grok Recommendations */}
        <Card className="bg-gradient-to-br from-background to-accent/10">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <span>Expert Recommendations</span>
            </CardTitle>
            <CardDescription>
              Expert insights and alternative suggestions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {formatText(agent.grokRecommendations)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
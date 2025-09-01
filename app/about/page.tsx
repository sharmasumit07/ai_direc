import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, Zap, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - AI Agent Directory',
  description: 'Learn more about our mission to democratize access to AI tools and help users discover the perfect AI solutions for their needs.',
};

export default function AboutPage() {
  const features = [
    {
      icon: Brain,
      title: 'Curated Collection',
      description: 'Hand-picked AI tools across 50+ categories, each thoroughly reviewed and tested by our team.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the AI community, for the AI community. We welcome contributions and feedback.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Discovery',
      description: 'Our intelligent chatbot helps you find the perfect tools based on your specific requirements.'
    },
    {
      icon: Shield,
      title: 'Trusted Reviews',
      description: 'Expert insights and honest recommendations to help you make informed decisions.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About AI Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're on a mission to democratize access to AI tools and help everyone discover 
            the perfect AI solutions for their unique needs.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p>
              In the rapidly evolving world of artificial intelligence, thousands of new tools and agents 
              are created every month. While this innovation is exciting, it can be overwhelming for users 
              trying to find the right solution for their specific needs.
            </p>
            <p>
              AI Directory was born from the need to create a comprehensive, user-friendly platform where 
              anyone can discover, compare, and learn about AI tools. We've curated over 10,000 AI agents 
              and tools, organizing them by category and providing detailed usage guides, setup instructions, 
              and expert recommendations.
            </p>
            <p>
              What sets us apart is our intelligent chatbot assistant, powered by advanced AI, that can 
              understand your specific requirements and suggest the most suitable tools from our extensive 
              database. Whether you're a developer, content creator, business owner, or just curious about AI, 
              we're here to help you navigate the AI landscape.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-purple-500 p-2.5 mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission */}
        <div className="text-center space-y-6 bg-gradient-to-r from-background via-accent/10 to-background p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To make AI accessible to everyone by providing the most comprehensive, 
            up-to-date directory of AI tools with intelligent discovery and personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
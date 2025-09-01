import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import agentsData from '@/data/agents.json';

export function FeaturedAgents() {
  const featuredAgents = agentsData.slice(0, 6);

  return (
    <section className="container mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Featured AI Agents</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hand-picked selection of the most popular and powerful AI tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredAgents.map((agent) => (
          <Card key={agent.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="group-hover:text-primary transition-colors">
                  {agent.name}
                </CardTitle>
              </div>
              <CardDescription className="line-clamp-2">
                {agent.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {agent.categories.slice(0, 3).map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
              <Link href={`/agents/${agent.slug}`}>
                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/directory">
          <Button size="lg" variant="outline" className="group">
            View All Agents
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Image, 
  Video, 
  FileText, 
  Zap, 
  Code,
  Mic,
  Palette,
  BarChart3,
  Bot
} from 'lucide-react';

const categories = [
  {
    name: 'AI Assistants',
    slug: 'ai-assistants',
    description: 'Conversational AI and virtual assistants',
    icon: Brain,
    count: '2,500+',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Images',
    slug: 'images',
    description: 'AI image generation and editing tools',
    icon: Image,
    count: '1,800+',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Video',
    slug: 'video',
    description: 'AI video creation and editing platforms',
    icon: Video,
    count: '1,200+',
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Writing',
    slug: 'writing',
    description: 'AI writing and content creation tools',
    icon: FileText,
    count: '1,500+',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Productivity',
    slug: 'productivity',
    description: 'AI tools for workflow optimization',
    icon: Zap,
    count: '2,000+',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    name: 'Development',
    slug: 'development',
    description: 'AI coding and development assistants',
    icon: Code,
    count: '800+',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Audio',
    slug: 'audio',
    description: 'AI audio generation and processing',
    icon: Mic,
    count: '600+',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'AI design and creative tools',
    icon: Palette,
    count: '900+',
    color: 'from-rose-500 to-pink-500'
  }
];

export function CategoryCards() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Explore AI Tools by Category</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse our curated collection of AI tools organized by use case and functionality
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          
          return (
            <Link key={category.slug} href={`/directory?category=${category.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{category.count}</div>
                  <div className="text-sm text-muted-foreground">Available tools</div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
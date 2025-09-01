import agentsData from '@/data/agents.json';

export interface Agent {
  name: string;
  slug: string;
  description: string;
  categories: string[];
  usageInstructions: string;
  setupGuide: string;
  externalLink: string;
  grokRecommendations: string;
}

export function getAllAgents(): Agent[] {
  return agentsData;
}

export function getAgentBySlug(slug: string): Agent | undefined {
  return agentsData.find(agent => agent.slug === slug);
}

export function getAgentsByCategory(category: string): Agent[] {
  return agentsData.filter(agent => agent.categories.includes(category));
}

export function searchAgents(query: string): Agent[] {
  const lowercaseQuery = query.toLowerCase();
  return agentsData.filter(agent => 
    agent.name.toLowerCase().includes(lowercaseQuery) ||
    agent.description.toLowerCase().includes(lowercaseQuery) ||
    agent.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
  );
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  agentsData.forEach(agent => {
    agent.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).sort();
}
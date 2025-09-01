"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const availableCategories = [
  'ai-assistants', 'productivity', 'writing', 'images', 'video', 'audio',
  'development', 'design', 'marketing', 'automation', 'research', 'education',
  'business', 'creative', 'data-analysis', 'customer-service', 'social-media',
  'e-commerce', 'finance', 'healthcare'
];

const pricingTypes = [
  { value: 'free', label: 'Free' },
  { value: 'freemium', label: 'Freemium' },
  { value: 'paid', label: 'Paid' },
  { value: 'subscription', label: 'Subscription' },
  { value: 'one-time', label: 'One-time Purchase' },
  { value: 'enterprise', label: 'Enterprise' }
];

export default function SubmitAgentPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    categories: [] as string[],
    pricingType: '',
    usageInstructions: '',
    setupGuide: '',
    keyFeatures: '',
    targetAudience: '',
    submitterName: '',
    submitterEmail: '',
    isOwner: false,
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    if (formData.categories.length === 0) {
      toast.error('Please select at least one category');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Agent submitted successfully! We\'ll review it within 48 hours.');
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="text-center space-y-6 p-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900 p-4">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Submission Received!</h1>
            <p className="text-muted-foreground">
              Thank you for submitting your AI agent. Our team will review it within 48 hours 
              and contact you at the provided email address.
            </p>
          </div>
          <Button onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Submit Your AI Agent</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Help grow our directory by submitting your AI tool or agent. We review all submissions 
            to ensure quality and relevance for our community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Tell us about your AI agent or tool
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Agent Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g., ChatGPT, Midjourney"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL *</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of what your AI agent does..."
                  className="min-h-20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keyFeatures">Key Features</Label>
                <Textarea
                  id="keyFeatures"
                  value={formData.keyFeatures}
                  onChange={(e) => setFormData(prev => ({ ...prev, keyFeatures: e.target.value }))}
                  placeholder="List the main features and capabilities..."
                  className="min-h-20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
                  placeholder="e.g., Developers, Content creators, Businesses"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories and Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Categories & Pricing</CardTitle>
              <CardDescription>
                Help users find your agent by selecting relevant categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Categories * (Select all that apply)</Label>
                <div className="flex flex-wrap gap-2">
                  {availableCategories.map((category) => (
                    <Badge
                      key={category}
                      variant={formData.categories.includes(category) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors"
                      onClick={() => handleCategoryToggle(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                {formData.categories.length === 0 && (
                  <p className="text-sm text-red-500">Please select at least one category</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricingType">Pricing Type *</Label>
                <Select
                  value={formData.pricingType}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, pricingType: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing model" />
                  </SelectTrigger>
                  <SelectContent>
                    {pricingTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Usage Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Usage & Setup</CardTitle>
              <CardDescription>
                Help users get started with your AI agent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="usageInstructions">Usage Instructions</Label>
                <Textarea
                  id="usageInstructions"
                  value={formData.usageInstructions}
                  onChange={(e) => setFormData(prev => ({ ...prev, usageInstructions: e.target.value }))}
                  placeholder="Step-by-step instructions on how to use your agent..."
                  className="min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="setupGuide">Setup Guide</Label>
                <Textarea
                  id="setupGuide"
                  value={formData.setupGuide}
                  onChange={(e) => setFormData(prev => ({ ...prev, setupGuide: e.target.value }))}
                  placeholder="How to get started, account creation, API setup, etc..."
                  className="min-h-24"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submitter Information */}
          <Card>
            <CardHeader>
              <CardTitle>Submitter Information</CardTitle>
              <CardDescription>
                We need your contact information for verification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="submitterName">Your Name *</Label>
                  <Input
                    id="submitterName"
                    value={formData.submitterName}
                    onChange={(e) => setFormData(prev => ({ ...prev, submitterName: e.target.value }))}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submitterEmail">Your Email *</Label>
                  <Input
                    id="submitterEmail"
                    type="email"
                    value={formData.submitterEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, submitterEmail: e.target.value }))}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isOwner"
                  checked={formData.isOwner}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isOwner: checked as boolean }))}
                />
                <Label htmlFor="isOwner" className="text-sm">
                  I am the owner or authorized representative of this AI agent
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the terms and conditions and confirm that all information provided is accurate *
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submission Criteria */}
          <Card className="bg-accent/20">
            <CardHeader>
              <CardTitle>Submission Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p>Agent must be functional and publicly accessible</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p>Clear documentation and usage instructions required</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p>Must provide genuine value to users</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p>No spam, adult content, or malicious tools</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p>Review process takes 24-48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            disabled={isSubmitting || !formData.agreeToTerms}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Agent for Review
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
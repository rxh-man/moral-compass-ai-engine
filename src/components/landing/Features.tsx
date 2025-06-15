
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe, Scale, Bot, Users, History, TestTube2 } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-8 w-8 text-brand-gold" />,
    title: 'Global Cultural Ethics Spectrum',
    description: 'View how dozens of civilizations interpret an issue — ideal for international firms or diplomats.',
  },
  {
    icon: <Scale className="h-8 w-8 text-brand-gold" />,
    title: 'Moral Outcome Optimizer',
    description: 'AI balances maximum good, minimum harm, and long-term sustainability.',
  },
  {
    icon: <Users className="h-8 w-8 text-brand-gold" />,
    title: 'Policy Ethics Evaluator',
    description: 'Governments and corporations test upcoming laws or guidelines for global fairness.',
  },
  {
    icon: <History className="h-8 w-8 text-brand-gold" />,
    title: 'Future Ethics Simulator',
    description: 'Predict if a decision made today will be seen as ethical 100 years from now.',
  },
   {
    icon: <Bot className="h-8 w-8 text-brand-gold" />,
    title: 'AI & Philosophy Engine',
    description: 'GPT trained on 3,000 years of moral theory with an ethical NLP classifier and cross-cultural ontology models.',
  },
  {
    icon: <TestTube2 className="h-8 w-8 text-brand-gold" />,
    title: 'Transparent & Secure',
    description: 'Anonymous case processing with full source transparency and citation model for trustworthy results.',
  }
];

const Features = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">A Global Moral Compass</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-brand-gold/50 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-foreground/70 pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

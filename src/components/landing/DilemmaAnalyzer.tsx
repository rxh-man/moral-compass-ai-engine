
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader, BarChart, Scale, Globe, TestTube2 } from 'lucide-react';

const DilemmaAnalyzer = () => {
  const [dilemma, setDilemma] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!dilemma) return;
    setIsLoading(true);
    setAnalysis(null);
    setTimeout(() => {
      setAnalysis(`Based on an analysis across 17 major philosophical frameworks, your dilemma presents a primary conflict between Utilitarian principles (maximizing overall well-being) and Deontological duties (adherence to moral rules). The Kantian Categorical Imperative suggests one course of action, while a Confucian role-ethics perspective suggests another, prioritizing communal harmony. Our Moral Outcome Optimizer suggests a resolution that balances these perspectives by [redacted for demo].`);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-gold/20 max-w-2xl mx-auto">
      <h3 className="text-2xl text-center mb-4">Upload Your Dilemma</h3>
      <p className="text-center text-brand-green/70 mb-6">Personal, corporate, or national issues analyzed by AI across moral frameworks.</p>
      <Textarea
        placeholder="Describe a moral or ethical dilemma... e.g., 'Should a self-driving car prioritize its passenger or a group of pedestrians?'"
        className="min-h-[100px] bg-white/70"
        value={dilemma}
        onChange={(e) => setDilemma(e.target.value)}
      />
      <Button onClick={handleAnalyze} disabled={isLoading || !dilemma} className="w-full mt-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-bold">
        {isLoading ? <Loader className="animate-spin mr-2" /> : 'Run Ethical Analysis'}
      </Button>

      {isLoading && (
         <div className="mt-6 text-center text-brand-green/80">
          <p>Analyzing across global moral lenses...</p>
          <div className="flex justify-center gap-4 mt-4">
              <BarChart className="animate-pulse" />
              <Scale className="animate-pulse" style={{ animationDelay: '200ms' }} />
              <Globe className="animate-pulse" style={{ animationDelay: '400ms' }} />
              <TestTube2 className="animate-pulse" style={{ animationDelay: '600ms' }} />
          </div>
         </div>
      )}

      {analysis && (
        <div className="mt-6 p-4 bg-brand-cream/50 rounded-md border border-brand-green/20 animate-fade-in-up">
          <h4 className="font-bold text-lg mb-2">Preliminary Analysis:</h4>
          <p className="text-brand-green/90">{analysis}</p>
        </div>
      )}
    </div>
  );
};

export default DilemmaAnalyzer;

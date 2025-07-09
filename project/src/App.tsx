import React, { useState } from 'react';
import { HungerSelector } from './components/HungerSelector';
import { TagSelector } from './components/TagSelector';
import { RecommendationResults } from './components/RecommendationResults';
import { ramenShops } from './data/ramenShops';
import { RamenShop } from './types/ramen';
import { ChefHat, ArrowLeft } from 'lucide-react';

type Step = 'hunger' | 'tags' | 'results';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('hunger');
  const [hungerLevel, setHungerLevel] = useState<number>(5);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<RamenShop[]>([]);

  const handleHungerSubmit = (level: number) => {
    setHungerLevel(level);
    setCurrentStep('tags');
  };

  const handleTagsSubmit = (tags: string[]) => {
    setSelectedTags(tags);
    
    // Filter recommendations based on hunger level and selected tags
    let filtered = ramenShops.filter(shop => {
      // If hunger level is 7 or below, exclude large serving shops unless G系 is selected
      if (hungerLevel <= 7 && shop.isLargeServing && !tags.includes('G系')) {
        return false;
      }
      
      // Check if shop has any of the selected tags
      return tags.some(tag => shop.tags.includes(tag));
    });

    setRecommendations(filtered);
    setCurrentStep('results');
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleTagSelectorNext = () => {
    handleTagsSubmit(selectedTags);
  };

  const handleReset = () => {
    setCurrentStep('hunger');
    setHungerLevel(5);
    setSelectedTags([]);
    setRecommendations([]);
  };

  const handleBack = () => {
    if (currentStep === 'tags') {
      setCurrentStep('hunger');
    } else if (currentStep === 'results') {
      setCurrentStep('tags');
    }
  };

  const getStepNumber = () => {
    switch (currentStep) {
      case 'hunger': return 1;
      case 'tags': return 2;
      case 'results': return 3;
      default: return 1;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  日吉ラーメンナビ
                </h1>
                <p className="text-sm text-gray-600">
                  あなたにぴったりのラーメン店を見つけよう
                </p>
              </div>
            </div>
            
            {currentStep !== 'hunger' && (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>戻る</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step <= getStepNumber()
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-16 h-1 mx-2 transition-colors ${
                    step < getStepNumber() ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>お腹の空き具合</span>
          <span>好みの味</span>
          <span>おすすめ結果</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {currentStep === 'hunger' && (
            <HungerSelector 
              hungerLevel={hungerLevel}
              onHungerChange={setHungerLevel}
              onNext={() => handleHungerSubmit(hungerLevel)}
            />
          )}
          
          {currentStep === 'tags' && (
            <TagSelector 
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onNext={handleTagSelectorNext}
            />
          )}
          
          {currentStep === 'results' && (
            <RecommendationResults
              recommendations={recommendations}
              onReset={handleReset}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-red-100 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2025 日吉ラーメンナビ - 美味しいラーメンとの出会いをお手伝い</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
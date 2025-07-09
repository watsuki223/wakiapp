import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HungerSelectorProps {
  hungerLevel: number;
  onHungerChange: (level: number) => void;
  onNext: () => void;
}

export const HungerSelector: React.FC<HungerSelectorProps> = ({
  hungerLevel,
  onHungerChange,
  onNext
}) => {
  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          お腹の空き具合は？
        </h2>
        <p className="text-gray-600">
          10段階で教えてください（1: 全然空いていない 〜 10: とても空いている）
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>全然空いていない</span>
          <span>とても空いている</span>
        </div>
        
        <div className="grid grid-cols-10 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
            <button
              key={level}
              onClick={() => onHungerChange(level)}
              className={`
                h-12 w-12 rounded-lg font-semibold transition-all duration-200
                ${hungerLevel === level
                  ? 'bg-red-500 text-white shadow-lg scale-110'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }
              `}
            >
              {level}
            </button>
          ))}
        </div>

        {hungerLevel > 0 && (
          <div className="text-center space-y-4">
            <div className="text-lg font-medium text-gray-700">
              選択: {hungerLevel}/10
            </div>
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              次へ
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
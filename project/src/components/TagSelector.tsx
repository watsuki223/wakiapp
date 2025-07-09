import React from 'react';
import { ChevronRight } from 'lucide-react';
import { availableTags, tagColors } from '../data/ramenShops';

interface TagSelectorProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onNext: () => void;
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTags,
  onTagToggle,
  onNext
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          好みのスープを選んでください
        </h2>
        <p className="text-gray-600">
          複数選択可能です
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`
              px-4 py-3 rounded-lg font-medium transition-all duration-200
              border-2 hover:scale-105
              ${selectedTags.includes(tag)
                ? 'bg-red-500 text-white border-red-500 shadow-lg'
                : `${tagColors[tag]} border-current hover:shadow-md`
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <div className="text-center space-y-4">
          <div className="text-lg font-medium text-gray-700">
            選択中: {selectedTags.join(', ')}
          </div>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            おすすめを見る
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
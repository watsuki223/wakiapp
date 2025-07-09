import React from 'react';
import { RamenShop } from '../types/ramen';
import { MapPin, Clock, Star } from 'lucide-react';

interface RecommendationResultsProps {
  recommendations: RamenShop[];
  onReset: () => void;
}

export const RecommendationResults: React.FC<RecommendationResultsProps> = ({
  recommendations,
  onReset,
}) => {
  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">😅</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          条件に合うお店が見つかりませんでした
        </h3>
        <p className="text-gray-600 mb-6">
          別の条件で試してみてください
        </p>
        <button
          onClick={onReset}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          最初からやり直す
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          おすすめのラーメン店
        </h2>
        <p className="text-gray-600">
          {recommendations.length}件のお店が見つかりました
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((shop) => (
          <div
            key={shop.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {shop.imageUrl && (
              <div className="h-48 overflow-hidden">
                <img
                  src={shop.imageUrl}
                  alt={`${shop.name}のラーメン`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">4.2</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {shop.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {shop.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>日吉駅徒歩5分</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>11:00-22:00</span>
                </div>
              </div>

              {shop.isLargeServing && (
                <div className="mt-3 px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium inline-block">
                  大盛り対応
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={onReset}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          別の条件で探す
        </button>
      </div>
    </div>
  );
};
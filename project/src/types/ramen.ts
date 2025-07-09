export interface RamenShop {
  id: string;
  name: string;
  tags: string[];
  isLargePortion: boolean;
  description: string;
  specialties: string[];
  imageUrl?: string;
}

export interface AppState {
  currentStep: number;
  hungerLevel: number;
  selectedTags: string[];
  recommendations: RamenShop[];
}
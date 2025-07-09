import { RamenShop } from '../types/ramen';

export const ramenShops: RamenShop[] = [
  {
    id: 'aomi',
    name: 'あおみ',
    tags: ['だし系', '醤油', '塩', '汁なし'],
    isLargePortion: false,
    description: 'だし系の上品な味わいが特徴の老舗店',
    specialties: ['醤油ラーメン', '塩ラーメン', '汁なし担々麺'],
    imageUrl: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'don',
    name: 'どん',
    tags: ['汁なし', 'G系', 'みそ', 'こってり', '醤油'],
    isLargePortion: true,
    description: 'ガッツリ系の代表格、ボリューム満点',
    specialties: ['汁なし担々麺', 'G系ラーメン', '味噌ラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'gatton',
    name: 'がっとん',
    tags: ['醤油', 'こってり', '家系', 'とんこつ'],
    isLargePortion: false,
    description: '濃厚な醤油ベースの人気店',
    specialties: ['醤油ラーメン', '家系ラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'butazan',
    name: '豚山日吉店',
    tags: ['汁なし', 'G系', 'こってり'],
    isLargePortion: true,
    description: 'ガッツリ系の名店、若者に大人気',
    specialties: ['汁なし担々麺', 'G系ラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'musashiya',
    name: '武蔵屋日吉',
    tags: ['家系', 'とんこつ', 'こってり'],
    isLargePortion: false,
    description: '本格家系の老舗、濃厚とんこつ',
    specialties: ['家系ラーメン', 'とんこつラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907230/pexels-photo-1907230.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'hamatra',
    name: 'ハマトラ',
    tags: ['鶏白湯', 'しょうゆ'],
    isLargePortion: false,
    description: '鶏白湯の優しい味わいが自慢',
    specialties: ['鶏白湯ラーメン', '醤油ラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907231/pexels-photo-1907231.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'rasuta',
    name: 'らすた',
    tags: ['家系', 'とんこつ'],
    isLargePortion: false,
    description: '家系ラーメンの実力店',
    specialties: ['家系ラーメン', 'とんこつラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907232/pexels-photo-1907232.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'abisuke',
    name: 'あびすけ',
    tags: ['つけ麺', '汁なし', 'とんこつ'],
    isLargePortion: false,
    description: 'つけ麺専門店の人気店',
    specialties: ['つけ麺', '汁なし担々麺'],
    imageUrl: 'https://images.pexels.com/photos/1907233/pexels-photo-1907233.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'kokoro',
    name: 'こころ',
    tags: ['汁なし'],
    isLargePortion: false,
    description: 'シンプルな汁なしメニューが好評',
    specialties: ['汁なし担々麺', '汁なし和え麺'],
    imageUrl: 'https://images.pexels.com/photos/1907234/pexels-photo-1907234.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'amanojaku',
    name: '天邪鬼',
    tags: ['醤油', 'こってり'],
    isLargePortion: true,
    description: 'こってり醤油の大盛り専門店',
    specialties: ['醤油ラーメン', 'こってりラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907235/pexels-photo-1907235.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'taishoken',
    name: '大勝軒',
    tags: ['だし系', 'しょうゆ', 'つけ麺', 'あっさり'],
    isLargePortion: false,
    description: 'つけ麺の老舗、あっさり系の名店',
    specialties: ['つけ麺', '醤油ラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907236/pexels-photo-1907236.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'daikiya',
    name: '大輝屋',
    tags: ['家系', 'こってり', 'とんこつ'],
    isLargePortion: false,
    description: '家系ラーメンの実力店',
    specialties: ['家系ラーメン', 'とんこつラーメン'],
    imageUrl: 'https://images.pexels.com/photos/1907237/pexels-photo-1907237.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'hanakiru',
    name: '花木流味噌日吉店',
    tags: ['みそ', 'こってり'],
    isLargePortion: false,
    description: '味噌ラーメンの専門店',
    specialties: ['味噌ラーメン', 'こってり味噌'],
    imageUrl: 'https://images.pexels.com/photos/1907238/pexels-photo-1907238.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const availableTags = [
  'とんこつ', '醤油', 'みそ', '塩', '鶏白湯', '汁なし', 
  'つけ麺', 'だし系', 'G系', '家系', 'あっさり', 'こってり'
];

export const tagColors: Record<string, string> = {
  'とんこつ': 'bg-amber-100 text-amber-800 border-amber-300',
  '醤油': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'みそ': 'bg-orange-100 text-orange-800 border-orange-300',
  '塩': 'bg-blue-100 text-blue-800 border-blue-300',
  '鶏白湯': 'bg-pink-100 text-pink-800 border-pink-300',
  '汁なし': 'bg-red-100 text-red-800 border-red-300',
  'つけ麺': 'bg-purple-100 text-purple-800 border-purple-300',
  'だし系': 'bg-green-100 text-green-800 border-green-300',
  'G系': 'bg-gray-100 text-gray-800 border-gray-300',
  '家系': 'bg-indigo-100 text-indigo-800 border-indigo-300',
  'あっさり': 'bg-emerald-100 text-emerald-800 border-emerald-300',
  'こってり': 'bg-rose-100 text-rose-800 border-rose-300'
};
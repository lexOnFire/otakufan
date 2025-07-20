// Tipos principais do OtakuFan
export interface User {
  id?: string;
  _id?: string;
  name?: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  level: number;
  xp: number;
  badges: string[] | Badge[];
  fans?: string[] | number;
  superfans?: string[] | number;
  following?: string[] | number;
  followers?: number;
  favoriteAnimes?: string[];
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Badge {
  _id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  xpRequired: number;
  conditions: BadgeCondition[];
}

export interface BadgeCondition {
  type: 'posts' | 'likes' | 'comments' | 'videos' | 'communities' | 'friends';
  count: number;
}

export interface Post {
  _id: string;
  authorId: string;
  author: User;
  content: string;
  type: 'text' | 'image' | 'video' | 'short_video';
  mediaUrl?: string;
  tags: string[];
  likes: string[];
  comments: Comment[];
  shares: number;
  views: number;
  animeReference?: AnimeReference;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  _id: string;
  authorId: string;
  author: User;
  content: string;
  likes: string[];
  replies: Comment[];
  createdAt: Date;
}

export interface Community {
  _id: string;
  name: string;
  description: string;
  avatar?: string;
  banner?: string;
  category: string;
  tags: string[];
  members: string[];
  moderators: string[];
  creatorId: string;
  posts: string[];
  rules: string[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Scrap {
  _id: string;
  fromUserId: string;
  toUserId: string;
  from: User;
  to: User;
  content: string;
  isPublic: boolean;
  likes: string[];
  createdAt: Date;
}

export interface AnimeReference {
  id: number;
  title: string;
  image?: string;
  type: 'anime' | 'manga' | 'character';
}

export interface Notification {
  _id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'badge' | 'community' | 'scrap';
  message: string;
  relatedId?: string;
  isRead: boolean;
  createdAt: Date;
}

export interface Level {
  level: number;
  name: string;
  xpRequired: number;
  benefits: string[];
  color: string;
}

// Tipos para API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Tipos para forms
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PostForm {
  content: string;
  type: 'text' | 'image' | 'video' | 'short_video';
  tags: string[];
  animeReference?: AnimeReference;
}

export interface CommunityForm {
  name: string;
  description: string;
  category: string;
  tags: string[];
  isPrivate: boolean;
  rules: string[];
}

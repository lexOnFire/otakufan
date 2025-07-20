import mongoose, { Schema, Document } from 'mongoose';
import { User, Badge, Post, Community, Scrap, Notification } from '@/types';

// Schema do Badge
const badgeConditionSchema = new Schema({
  type: {
    type: String,
    enum: ['posts', 'likes', 'comments', 'videos', 'communities', 'friends'],
    required: true
  },
  count: { type: Number, required: true }
});

const badgeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  rarity: {
    type: String,
    enum: ['common', 'rare', 'epic', 'legendary'],
    default: 'common'
  },
  xpRequired: { type: Number, default: 0 },
  conditions: [badgeConditionSchema]
}, { timestamps: true });

// Schema do User
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  bio: { type: String, default: '' },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  badges: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
  fans: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  superfans: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  favoriteAnimes: [{ type: String }],
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

// Schema do Comment
const commentSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

// Schema do Post
const animeReferenceSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String },
  type: {
    type: String,
    enum: ['anime', 'manga', 'character'],
    required: true
  }
});

const postSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'short_video'],
    default: 'text'
  },
  mediaUrl: { type: String },
  tags: [{ type: String }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema],
  shares: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  animeReference: animeReferenceSchema
}, { timestamps: true });

// Schema da Community
const communitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  avatar: { type: String },
  banner: { type: String },
  category: { type: String, required: true },
  tags: [{ type: String }],
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  moderators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  rules: [{ type: String }],
  isPrivate: { type: Boolean, default: false }
}, { timestamps: true });

// Schema do Scrap
const scrapSchema = new Schema({
  fromUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  toUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  isPublic: { type: Boolean, default: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

// Schema da Notification
const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String,
    enum: ['like', 'comment', 'follow', 'badge', 'community', 'scrap'],
    required: true
  },
  message: { type: String, required: true },
  relatedId: { type: Schema.Types.ObjectId },
  isRead: { type: Boolean, default: false }
}, { timestamps: true });

// Criar os modelos
export const BadgeModel = mongoose.models.Badge || mongoose.model<Badge & Document>('Badge', badgeSchema);
export const UserModel = mongoose.models.User || mongoose.model<User & Document>('User', userSchema);
export const PostModel = mongoose.models.Post || mongoose.model<Post & Document>('Post', postSchema);
export const CommunityModel = mongoose.models.Community || mongoose.model<Community & Document>('Community', communitySchema);
export const ScrapModel = mongoose.models.Scrap || mongoose.model<Scrap & Document>('Scrap', scrapSchema);
export const NotificationModel = mongoose.models.Notification || mongoose.model<Notification & Document>('Notification', notificationSchema);

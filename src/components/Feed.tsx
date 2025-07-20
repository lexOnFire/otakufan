'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, Play, Bookmark, MoreHorizontal } from 'lucide-react';

interface Author {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  verified: boolean;
  level: number;
}

interface Media {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

interface Post {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  media?: Media;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  tags: string[];
}

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const postTime = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - postTime.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'agora';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  return `${Math.floor(diffInSeconds / 86400)}d`;
};

const formatNumber = (num: number) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const handleBookmark = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  useEffect(() => {
    // Mock data para desenvolvimento
    const mockPosts: Post[] = [
      {
        id: '1',
        author: {
          id: '1',
          username: 'otaku_master',
          displayName: 'Otaku Master',
          avatar: '/placeholder-image.svg',
          verified: true,
          level: 15
        },
        content: 'Acabei de assistir o último episódio de Attack on Titan! Que final incrível! 🔥 Alguém mais ficou emocionado com a cena final?',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        media: {
          type: 'image',
          url: '/placeholder-anime.svg'
        },
        likes: 234,
        comments: 45,
        shares: 12,
        isLiked: false,
        isBookmarked: false,
        tags: ['AttackOnTitan', 'Anime', 'Manga']
      },
      {
        id: '2',
        author: {
          id: '2',
          username: 'anime_girl',
          displayName: 'Sakura Chan',
          avatar: '/placeholder-image.svg',
          verified: false,
          level: 8
        },
        content: 'Alguém sabe quando sai a segunda temporada de Demon Slayer? Estou ansiosa! 😍',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        media: {
          type: 'video',
          url: '/placeholder-video-thumb.svg',
          thumbnail: '/placeholder-video-thumb.svg'
        },
        likes: 89,
        comments: 23,
        shares: 5,
        isLiked: true,
        isBookmarked: true,
        tags: ['DemonSlayer', 'Anime']
      },
      {
        id: '3',
        author: {
          id: '3',
          username: 'manga_lover',
          displayName: 'Manga Reader',
          avatar: '/placeholder-image.svg',
          verified: true,
          level: 22
        },
        content: 'Recomendação do dia: One Piece! Se ainda não leram, estão perdendo uma das melhores histórias já contadas! 🏴‍☠️',
        timestamp: new Date(Date.now() - 10800000).toISOString(),
        likes: 156,
        comments: 67,
        shares: 34,
        isLiked: false,
        isBookmarked: false,
        tags: ['OnePiece', 'Manga', 'Recomendacao']
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card rounded-2xl p-6 animate-pulse backdrop-blur-xl border border-purple-500/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-600 rounded w-32"></div>
                <div className="h-3 bg-gray-700 rounded w-20"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded w-3/4"></div>
              <div className="h-48 bg-gray-600 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Create Post Widget */}
      <motion.div 
        className="glass-card rounded-2xl p-6 border border-pink-500/20 backdrop-blur-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <span className="text-lg">👤</span>
          </div>
          <button className="flex-1 bg-gray-800/50 rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-gray-700/50 transition-colors border border-gray-600/50" style={{fontFamily: 'Poppins, sans-serif'}}>
            O que você está assistindo hoje?
          </button>
          <motion.button 
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all"
            style={{fontFamily: 'Poppins, sans-serif'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Postar
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden border border-gray-600/30 backdrop-blur-xl hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
          >
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.displayName}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-purple-500/30"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-image.svg';
                      }}
                    />
                    {post.author.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ring-2 ring-gray-900">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>{post.author.displayName}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <span>Lv.{post.author.level}</span>
                      <span>•</span>
                      <span>{formatTimeAgo(post.timestamp)}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-4">
              <p className="text-white leading-relaxed text-sm mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>{post.content}</p>
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-purple-400 hover:text-pink-400 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Media */}
            {post.media && (
              <div className="px-6 pb-4">
                <div className="rounded-xl overflow-hidden">
                  {post.media.type === 'video' ? (
                    <div className="relative bg-gray-800 rounded-xl overflow-hidden group">
                      <Image
                        src={post.media.thumbnail || '/placeholder-video-thumb.svg'}
                        alt="Video thumbnail"
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-video-thumb.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <motion.button 
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={post.media.url}
                      alt="Post content"
                      width={600}
                      height={400}
                      className="w-full max-h-80 object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-image.svg';
                      }}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Engagement */}
            <div className="px-6 pb-6">
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                <div className="flex items-center space-x-6">
                  <motion.button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      post.isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{formatNumber(post.likes)}</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{formatNumber(post.comments)}</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">{formatNumber(post.shares)}</span>
                  </motion.button>
                </div>
                <motion.button
                  onClick={() => handleBookmark(post.id)}
                  className={`p-2 rounded-full transition-colors ${
                    post.isBookmarked 
                      ? 'text-yellow-400 bg-yellow-400/10' 
                      : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Bookmark className={`w-4 h-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </div>
  );
}

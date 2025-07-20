'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { TrendingUp, Users, Calendar, Star, Flame, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const trendingTopics = [
  { name: '#AttackOnTitan', posts: 1234, trend: 'up', color: 'from-red-400 to-orange-400' },
  { name: '#OnePiece', posts: 987, trend: 'up', color: 'from-blue-400 to-cyan-400' },
  { name: '#DemonSlayer', posts: 756, trend: 'up', color: 'from-purple-400 to-pink-400' },
  { name: '#MyHeroAcademia', posts: 623, trend: 'down', color: 'from-green-400 to-emerald-400' },
  { name: '#JujutsuKaisen', posts: 589, trend: 'up', color: 'from-yellow-400 to-orange-400' },
];

const suggestedUsers = [
  { username: 'AnimeReviewer', avatar: '', followers: 15430, isVerified: true, level: 25 },
  { username: 'MangaExpert', avatar: '', followers: 8923, isVerified: false, level: 18 },
  { username: 'CosplayMaster', avatar: '', followers: 12876, isVerified: true, level: 22 },
];

const upcomingEvents = [
  { name: 'Anime Expo 2024', date: '2024-07-25', participants: 2341, icon: '🎪' },
  { name: 'Cosplay Contest', date: '2024-07-28', participants: 567, icon: '🎭' },
  { name: 'Manga Reading Club', date: '2024-07-30', participants: 234, icon: '📚' },
];

const topAnimes = [
  { title: 'Frieren', rating: 9.8, episode: 'Novo episódio!', color: 'from-purple-400 to-blue-400' },
  { title: 'Dandadan', rating: 9.5, episode: 'Em andamento', color: 'from-orange-400 to-red-400' },
  { title: 'Blue Lock', rating: 9.2, episode: 'Temporada 2', color: 'from-blue-400 to-cyan-400' },
];

export function TrendingTopics() {
  return (
    <div className="space-y-3">
      {/* Trending Topics */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card className="glass-card compact-card border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-glow-subtle">
          <CardHeader className="pb-2 p-3">
            <CardTitle className="text-base flex items-center text-white font-poppins">
              <Flame className="h-4 w-4 mr-1.5 text-orange-400" />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Trending Topics
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-3 pt-0">
            {trendingTopics.map((topic, index) => (
              <motion.div 
                key={topic.name} 
                className="flex items-center justify-between hover:bg-white/5 p-1.5 rounded-lg transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.01, x: 3 }}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
              >
                <div className="flex-1 min-w-0 flex items-center space-x-2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${topic.color} flex items-center justify-center shadow-md`}>
                    <span className="text-xs font-bold text-white">#{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-sm font-semibold text-gray-100 cursor-pointer hover:text-pink-400 transition-colors truncate font-poppins" style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)'}}>
                        {topic.name}
                      </span>
                      <Badge 
                        variant={topic.trend === 'up' ? 'default' : 'secondary'} 
                        className={`h-3 px-1 text-xs shrink-0 ${topic.trend === 'up' ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}`}
                      >
                        {topic.trend === 'up' ? '📈' : '📉'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-300 font-poppins font-medium" style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)'}}>
                      {topic.posts.toLocaleString()} posts
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.01 }}>
              <Button variant="ghost" size="sm" className="w-full mt-2 text-xs font-poppins hover:bg-orange-500/20 hover:text-orange-400 transition-colors h-7">
                Ver mais trends 🔥
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top Animes da Temporada */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="glass-card border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-glow-subtle">
          <CardHeader className="pb-3 p-4 md:p-6">
            <CardTitle className="text-base md:text-lg flex items-center text-white font-poppins">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 mr-2 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Top Animes
              </span>
            </CardTitle>
          </CardHeader>
        <CardContent className="space-y-3 p-4 md:p-6 pt-0">
          {topAnimes.map((anime, index) => (
            <div key={anime.title} className="flex items-center justify-between hover:bg-accent/50 p-2 rounded-lg transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground shrink-0">{index + 1}.</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm md:text-base font-medium truncate">{anime.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{anime.episode}</p>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs shrink-0">
                ⭐ {anime.rating}
              </Badge>
            </div>
          ))}
          <Button variant="ghost" size="sm" className="w-full mt-3 text-xs md:text-sm">
            Ver rankings completos
          </Button>
        </CardContent>
      </Card>

      {/* Usuários Sugeridos */}
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardHeader className="pb-3 p-4 md:p-6">
          <CardTitle className="text-base md:text-lg flex items-center">
            <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-500" />
            Otakus para Seguir
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 md:p-6 pt-0">
          {suggestedUsers.map((user) => (
            <div key={user.username} className="flex items-center justify-between hover:bg-accent/50 p-2 rounded-lg transition-colors">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <Avatar className="h-8 w-8 md:h-10 md:w-10 shrink-0">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-xs bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-1">
                    <p className="text-sm md:text-base font-medium truncate">{user.username}</p>
                    {user.isVerified && (
                      <Badge variant="secondary" className="h-4 px-1 text-xs bg-blue-500 text-white shrink-0">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {user.followers.toLocaleString()} seguidores
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-xs shrink-0">
                Seguir
              </Button>
            </div>
          ))}
          <Button variant="ghost" size="sm" className="w-full mt-3 text-xs md:text-sm">
            Ver mais sugestões
          </Button>
        </CardContent>
      </Card>

      {/* Eventos Próximos */}
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardHeader className="pb-3 p-4 md:p-6">
          <CardTitle className="text-base md:text-lg flex items-center">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2 text-purple-500" />
            Eventos Próximos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 p-4 md:p-6 pt-0">
          {upcomingEvents.map((event) => (
            <div key={event.name} className="space-y-2 hover:bg-accent/50 p-2 rounded-lg transition-colors">
              <div className="flex items-center justify-between">
                <p className="text-sm md:text-base font-medium flex-1 min-w-0 truncate pr-2">{event.name}</p>
                <Badge variant="outline" className="text-xs shrink-0">
                  {new Date(event.date).toLocaleDateString('pt-BR')}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {event.participants} participantes interessados
              </p>
              <Button size="sm" variant="ghost" className="w-full text-xs">
                Participar
              </Button>
            </div>
          ))}
          <Button variant="ghost" size="sm" className="w-full mt-3 text-xs md:text-sm">
            Ver todos os eventos
          </Button>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4 md:p-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-2">
              <p className="text-xl md:text-2xl font-bold text-primary">25k+</p>
              <p className="text-xs text-muted-foreground">Otakus Ativos</p>
            </div>
            <div className="p-2">
              <p className="text-xl md:text-2xl font-bold text-primary">150+</p>
              <p className="text-xs text-muted-foreground">Comunidades</p>
            </div>
            <div className="p-2">
              <p className="text-xl md:text-2xl font-bold text-primary">5k+</p>
              <p className="text-xs text-muted-foreground">Vídeos Hoje</p>
            </div>
            <div className="p-2">
              <p className="text-xl md:text-2xl font-bold text-primary">89%</p>
              <p className="text-xs text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </CardContent>
      </Card>
      </motion.div>
    </div>
  );
}

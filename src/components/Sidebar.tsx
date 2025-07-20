'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore, useUIStore } from '@/stores';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { calculateLevel, LEVELS } from '@/lib/utils';
import { cn } from '@/lib/utils';
import {
  Home,
  Video,
  Users,
  MessageSquare,
  Trophy,
  Star,
  TrendingUp,
  Calendar,
  Bookmark,
  PlusCircle
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Início', href: '/' },
  { icon: Video, label: 'Vídeos', href: '/videos' },
  { icon: TrendingUp, label: 'Shorts', href: '/shorts' },
  { icon: Users, label: 'Comunidades', href: '/communities' },
  { icon: MessageSquare, label: 'Recados', href: '/scraps' },
  { icon: Trophy, label: 'Rankings', href: '/rankings' },
  { icon: Star, label: 'Favoritos', href: '/favorites' },
  { icon: Calendar, label: 'Eventos', href: '/events' },
  { icon: Bookmark, label: 'Salvos', href: '/saved' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();
  const { sidebarOpen } = useUIStore();

  if (!user) return null;

  const currentLevel = calculateLevel(user.xp);
  const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1);
  const progressPercentage = nextLevel 
    ? ((user.xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100
    : 100;

  return (
    <aside 
      className={cn(
        "fixed left-0 top-14 md:top-16 h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] bg-card/95 backdrop-blur-lg border-r border-border transition-all duration-300 ease-in-out z-40",
        "lg:relative lg:top-0 lg:h-auto lg:bg-card lg:backdrop-blur-none", // Reset em desktop
        sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:w-16 lg:translate-x-0" // Mobile: slide in/out, Desktop: collapse
      )}
    >
      <div className="flex flex-col h-full overflow-hidden">
        {/* Perfil do usuário */}
        <div className="p-3 border-b border-white/10">
          {sidebarOpen ? (
            <div className="compact-spacing">
              <div className="flex items-center space-x-3">
                <div className="compact-avatar gradient-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-white">{user.username}</p>
                  <p className="text-caption">Nível {currentLevel.level}</p>
                </div>
              </div>
              
              {/* Barra de progresso do nível */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span style={{ color: currentLevel.color }}>{currentLevel.name}</span>
                  <span className="text-caption">{user.xp} XP</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                {nextLevel && (
                  <p className="text-caption">
                    {nextLevel.xpRequired - user.xp} XP para {nextLevel.name}
                  </p>
                )}
              </div>

              {/* Badges recentes */}
              {user.badges.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {user.badges.slice(0, 3).map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      🏆
                    </Badge>
                  ))}
                  {user.badges.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{user.badges.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                {user.username.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>

        {/* Menu de navegação */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-left",
                    sidebarOpen ? "px-3" : "px-0 justify-center",
                    isActive && "bg-accent text-accent-foreground",
                    "transition-all duration-200"
                  )}
                  size={sidebarOpen ? "default" : "icon"}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {sidebarOpen && (
                    <span className="ml-3 truncate">{item.label}</span>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Botão de criar conteúdo */}
        <div className="p-2 border-t border-white/10">
          <Button 
            className={cn(
              "compact-button w-full transition-all duration-200",
              sidebarOpen ? "px-3" : "px-0 justify-center"
            )}
            variant="otaku"
            size={sidebarOpen ? "default" : "icon"}
          >
            <PlusCircle className="h-5 w-5 shrink-0" />
            {sidebarOpen && <span className="ml-2">Criar Post</span>}
          </Button>
        </div>

        {/* Estatísticas rápidas */}
        {sidebarOpen && (
          <div className="p-3 border-t border-white/10">
            <div className="compact-spacing text-sm">
              <div className="flex justify-between">
                <span className="text-caption">Fãs</span>
                <span className="font-medium text-white">{Array.isArray(user.fans) ? user.fans.length : user.fans || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-caption">Seguindo</span>
                <span className="font-medium text-white">{Array.isArray(user.following) ? user.following.length : user.following || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-caption">Super Fãs</span>
                <span className="font-medium text-yellow-400">{Array.isArray(user.superfans) ? user.superfans.length : user.superfans || 0}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

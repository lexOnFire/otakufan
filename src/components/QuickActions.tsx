'use client';

import React from 'react';
import { useAuthStore } from '@/stores';
import { calculateLevel, LEVELS } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import {
  PlusCircle,
  Video,
  Users,
  MessageSquare,
  Trophy,
  Zap,
  Star,
  Calendar,
  Target
} from 'lucide-react';

const quickActions = [
  { icon: PlusCircle, label: 'Criar Post', href: '/create', color: 'text-pink-400' },
  { icon: Video, label: 'Upload Vídeo', href: '/upload/video', color: 'text-red-400' },
  { icon: Zap, label: 'Criar Short', href: '/upload/short', color: 'text-yellow-400' },
  { icon: Users, label: 'Nova Comunidade', href: '/communities/create', color: 'text-green-400' },
  { icon: MessageSquare, label: 'Enviar Recado', href: '/scraps/create', color: 'text-purple-400' },
  { icon: Calendar, label: 'Criar Evento', href: '/events/create', color: 'text-cyan-400' },
];

const achievements = [
  { name: 'Primeira Postagem', description: 'Publique seu primeiro post', progress: 100, xp: 50, color: 'from-green-400 to-emerald-400' },
  { name: 'Sociável', description: 'Ganhe 10 curtidas', progress: 60, xp: 30, color: 'from-pink-400 to-purple-400' },
  { name: 'Criador de Conteúdo', description: 'Poste 5 vídeos', progress: 40, xp: 100, color: 'from-blue-400 to-cyan-400' },
  { name: 'Líder Comunitário', description: 'Crie uma comunidade', progress: 0, xp: 200, color: 'from-yellow-400 to-orange-400' },
];

const dailyTasks = [
  { task: 'Fazer login diário', completed: true, xp: 5 },
  { task: 'Curtir 3 posts', completed: true, xp: 3 },
  { task: 'Comentar em 2 posts', completed: false, xp: 5 },
  { task: 'Compartilhar 1 post', completed: false, xp: 3 },
  { task: 'Visitar uma comunidade', completed: false, xp: 5 },
];

export function QuickActions() {
  const { user } = useAuthStore();

  if (!user) return null;

  const currentLevel = calculateLevel(user.xp);
  const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1);
  const progressPercentage = nextLevel 
    ? ((user.xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100
    : 100;

  const completedTasks = dailyTasks.filter(task => task.completed).length;
  const totalXpAvailable = dailyTasks.reduce((sum, task) => sum + task.xp, 0);
  const earnedXp = dailyTasks.filter(task => task.completed).reduce((sum, task) => sum + task.xp, 0);

  return (
    <div className="compact-spacing">
      {/* Status do Usuário */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-compact border-glow">
          <div className="mb-4">
            <h3 className="text-heading flex items-center">
              <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
              Seu Progresso
            </h3>
          </div>
          <div className="compact-spacing">
            <div className="text-center">
              <motion.div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-black font-bold text-lg gradient-accent shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {currentLevel.level}
              </motion.div>
              <p className="text-subheading">{currentLevel.name}</p>
              <p className="text-caption">{user.xp} XP</p>
            </div>

            {nextLevel && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-caption">Próximo nível</span>
                  <span className="text-purple-400">{nextLevel.xpRequired - user.xp} XP restantes</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <motion.div className="p-2" whileHover={{ scale: 1.05 }}>
                <p className="font-medium text-pink-400 text-sm">
                  {Array.isArray(user.fans) ? user.fans.length : user.fans || 0}
                </p>
                <p className="text-caption">Fãs</p>
              </motion.div>
              <motion.div className="p-2" whileHover={{ scale: 1.05 }}>
                <p className="font-medium text-yellow-400 text-sm">
                  {Array.isArray(user.superfans) ? user.superfans.length : user.superfans || 0}
                </p>
                <p className="text-caption">Super Fãs</p>
              </motion.div>
              <motion.div className="p-2" whileHover={{ scale: 1.05 }}>
                <p className="font-medium text-green-400 text-sm">{user.badges?.length || 0}</p>
                <p className="text-caption">Selos</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ações Rápidas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="card-compact">
          <div className="mb-4">
            <h3 className="text-heading flex items-center">
              <Zap className="h-4 w-4 mr-2 text-orange-500" />
              Ações Rápidas
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className="btn-secondary h-auto flex-col space-y-1 p-3 hover:scale-105"
                >
                  <Icon className={`h-4 w-4 ${action.color}`} />
                  <span className="text-xs text-center leading-tight">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Missões Diárias */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="card-compact">
          <div className="mb-4">
            <h3 className="text-heading flex items-center">
              <Target className="h-4 w-4 mr-2 text-green-500" />
              Missões Diárias
            </h3>
          </div>
          <div className="compact-spacing">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-white">
                {completedTasks}/{dailyTasks.length} concluídas
              </span>
              <Badge variant="secondary" className="text-xs">
                {earnedXp}/{totalXpAvailable} XP
              </Badge>
            </div>

            <Progress value={(completedTasks / dailyTasks.length) * 100} className="h-2" />

            <div className="space-tight">
              {dailyTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between glass-hover p-2 rounded-lg">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                      task.completed 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-400'
                    }`}>
                      {task.completed && <span className="text-xs">✓</span>}
                    </div>
                    <span className={`text-sm truncate ${
                      task.completed ? 'line-through text-gray-400' : 'text-white'
                    }`}>
                      {task.task}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {task.xp} XP
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conquistas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="card-compact">
          <div className="mb-4">
            <h3 className="text-heading flex items-center">
              <Star className="h-4 w-4 mr-2 text-purple-500" />
              Conquistas
            </h3>
          </div>
          <div className="space-tight">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-hover p-3 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white text-sm truncate">{achievement.name}</h4>
                    <p className="text-caption text-xs">{achievement.description}</p>
                  </div>
                  <Badge variant="outline" className="text-xs ml-2">
                    {achievement.xp} XP
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-caption">Progresso</span>
                    <span className="text-white">{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

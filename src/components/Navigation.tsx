'use client';

import React from 'react';
import Link from 'next/link';
import { useAuthStore, useNotificationStore, useUIStore } from '@/stores';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  Search, 
  Bell, 
  MessageCircle, 
  Menu,
  Settings,
  LogOut,
  User
} from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion } from 'framer-motion';

export function Navigation() {
  const { user, logout } = useAuthStore();
  const { unreadCount } = useNotificationStore();
  const { setSidebarOpen, sidebarOpen } = useUIStore();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <motion.nav 
      className="glass-nav backdrop-blur-xl border-b border-pink-500/20 sticky top-0 z-50 shadow-glow-subtle"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo e Toggle Sidebar */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden hover:bg-pink-500/20 hover:text-pink-400 transition-colors" // Mostra apenas em mobile
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-glow-pink"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg md:text-xl">🌸</span>
              </motion.div>
              <motion.div 
                className="text-xl md:text-2xl font-poppins font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                OtakuFan
              </motion.div>
            </Link>
          </div>

          {/* Barra de Pesquisa - oculta em mobile pequeno */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Pesquisar otakus, animes, posts..."
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all hover:border-purple-500/50"
              />
            </div>
          </div>

          {/* Ações do usuário */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* Botão de pesquisa mobile */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="sm:hidden hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Notificações */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-yellow-500/20 hover:text-yellow-400 transition-colors"
              >
                <Bell className="h-4 w-4 md:h-5 md:w-5" />
                {unreadCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-glow-red"
                  >
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </motion.div>
                )}
              </Button>
            </motion.div>

            {/* Mensagens */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </motion.div>

            {/* Menu do usuário */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:ring-2 hover:ring-pink-500/50 transition-all">
                    <Avatar className="h-6 w-6 md:h-8 md:w-8 ring-2 ring-gradient-to-r ring-pink-500/50">
                      <AvatarImage src={user?.avatar} alt={user?.username} />
                      <AvatarFallback className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {user?.username?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </motion.div>
              </DropdownMenu.Trigger>
              
              <DropdownMenu.Portal>
                <DropdownMenu.Content 
                  className="w-56 glass-card border border-pink-500/20 rounded-lg shadow-glow-subtle p-1 mr-4"
                  align="end"
                  sideOffset={8}
                >
                  <DropdownMenu.Label className="px-3 py-2 text-sm font-semibold font-poppins">
                    <div className="flex flex-col">
                      <span className="text-white">{user?.username}</span>
                      <span className="text-xs text-gray-400 font-normal">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                          Nível {user ? Math.floor(user.xp / 100) + 1 : 1}
                        </span>
                        {" • "}
                        <span className="text-purple-400">{user?.xp || 0} XP</span>
                      </span>
                    </div>
                  </DropdownMenu.Label>
                  <DropdownMenu.Separator className="h-px bg-pink-500/20 mx-1 my-1" />
                  
                  <DropdownMenu.Item asChild>
                    <Link 
                      href={`/profile/${user?.username}`}
                      className="flex items-center px-3 py-2 text-sm hover:bg-purple-500/20 rounded-md cursor-pointer text-gray-300 hover:text-white transition-colors font-poppins"
                    >
                      <User className="mr-3 h-4 w-4 text-purple-400" />
                      Meu Perfil
                    </Link>
                  </DropdownMenu.Item>
                  
                  <DropdownMenu.Item asChild>
                    <Link 
                      href="/settings"
                      className="flex items-center px-3 py-2 text-sm hover:bg-cyan-500/20 rounded-md cursor-pointer text-gray-300 hover:text-white transition-colors font-poppins"
                    >
                      <Settings className="mr-3 h-4 w-4 text-cyan-400" />
                      Configurações
                    </Link>
                  </DropdownMenu.Item>
                  
                  <DropdownMenu.Separator className="h-px bg-pink-500/20 mx-1 my-1" />
                  
                  <DropdownMenu.Item 
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 text-sm hover:bg-red-500/20 rounded-md cursor-pointer text-red-400 hover:text-red-300 transition-colors font-poppins"
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    Sair
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

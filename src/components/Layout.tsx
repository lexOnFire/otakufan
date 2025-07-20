'use client';

import React from 'react';
import { useAuthStore, useUIStore } from '@/stores';
import { Navigation } from './Navigation';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user } = useAuthStore();
  const { sidebarOpen, theme } = useUIStore();

  if (!user) {
    return (
      <div className="min-h-screen bg-anime-pattern">
        <div className="relative min-h-screen">
          {/* Background Effects for non-authenticated pages */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5"></div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-anime-pattern", theme === 'dark' && 'dark')}>
      {/* Fixed background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-float-anime opacity-40"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float-anime opacity-30" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full animate-float-anime opacity-35" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float-anime opacity-25" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-float-anime opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-float-anime opacity-40" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <div className="flex">
          {/* Sidebar - oculta em mobile */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          
          {/* Main content */}
          <motion.main 
            className={cn(
              "flex-1 transition-all duration-300 ease-in-out min-h-[calc(100vh-4rem)]",
              "lg:ml-0", // Remove margin left em mobile
              sidebarOpen ? "lg:ml-64" : "lg:ml-16" // Aplica margin apenas em lg+
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Container com padding responsivo */}
            <div className="w-full">
              {children}
            </div>
          </motion.main>
        </div>
        
        {/* Overlay para mobile quando sidebar está aberta */}
        {sidebarOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => useUIStore.getState().setSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    </div>
  );
}

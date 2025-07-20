'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/stores';
import { Layout } from '@/components/Layout';
import Feed from '@/components/Feed';
import { TrendingTopics } from '@/components/TrendingTopics';
import { QuickActions } from '@/components/QuickActions';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0f0f17 0%, #1a0f2e 20%, #2d1b4e 40%, #1a0f2e 60%, #0f0f17 80%, #000000 100%)',
        }}
      >
        <div className="text-center">
          <div className="relative mb-6">
            {/* Múltiplos círculos de loading com cores anime */}
            <div 
              className="w-20 h-20 border-4 border-transparent rounded-full animate-spin mx-auto"
              style={{
                borderTopColor: '#FF6B9D',
                borderRightColor: '#8B5CF6',
                borderBottomColor: '#06B6D4',
                borderLeftColor: '#10B981',
              }}
            ></div>
            <div 
              className="absolute inset-2 w-16 h-16 border-4 border-transparent rounded-full animate-spin mx-auto"
              style={{
                borderTopColor: '#06B6D4',
                borderBottomColor: '#FF6B9D',
                animationDirection: 'reverse',
                animationDuration: '1.5s',
              }}
            ></div>
            <div 
              className="absolute inset-4 w-12 h-12 border-4 border-transparent rounded-full animate-spin mx-auto"
              style={{
                borderTopColor: '#8B5CF6',
                borderBottomColor: '#10B981',
                animationDuration: '0.8s',
              }}
            ></div>
          </div>
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 
              className="text-2xl font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, #FF6B9D, #8B5CF6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Carregando OtakuFan... ✨
            </h2>
            <p className="text-gray-400 text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>
              Preparando sua experiência otaku perfeita 🌸
            </p>
          </motion.div>
          
          {/* Efeitos de fundo */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full opacity-30 animate-bounce"
                style={{
                  background: ['#FF6B9D', '#8B5CF6', '#06B6D4', '#10B981'][i % 4],
                  top: `${20 + (i % 4) * 20}%`,
                  left: `${10 + (i % 4) * 25}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirecionando para login
  }

  return (
    <Layout>
      <div 
        className="min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #0f0f17 0%, #1a0f2e 20%, #2d1b4e 40%, #1a0f2e 60%, #0f0f17 80%, #000000 100%)',
          position: 'relative',
        }}
      >
        {/* Container principal com layout preciso */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header da página */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6 border border-pink-500/20 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🌸</span>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Bem-vindo ao OtakuFan! 🎌
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Conecte-se com outros otakus e compartilhe sua paixão por anime
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm bg-green-500/20 rounded-full px-4 py-2 border border-green-500/30 backdrop-blur-sm">
                  <span className="text-gray-300" style={{fontFamily: 'Poppins, sans-serif'}}>Usuários online:</span>
                  <span className="font-bold text-green-400" style={{fontFamily: 'Poppins, sans-serif'}}>2,847</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Layout principal com Grid preciso */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar esquerda - Desktop only */}
            <motion.aside 
              className="hidden lg:block lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="sticky top-24 space-y-6">
                <QuickActions />
                
                {/* Widget de Level/XP */}
                <div className="glass-card rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Seu Progresso
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center mb-3 shadow-xl shadow-yellow-400/30">
                        <span className="text-2xl font-bold text-black" style={{fontFamily: 'Poppins, sans-serif'}}>15</span>
                      </div>
                      <p className="text-sm text-gray-400" style={{fontFamily: 'Poppins, sans-serif'}}>Nível Otaku</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400" style={{fontFamily: 'Poppins, sans-serif'}}>XP</span>
                        <span className="text-purple-400 font-bold" style={{fontFamily: 'Poppins, sans-serif'}}>3,250 / 5,000</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className="w-2/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Feed principal - Centro da tela */}
            <motion.main 
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <Feed />
              </div>
            </motion.main>

            {/* Sidebar direita - Desktop only */}
            <motion.aside 
              className="hidden lg:block lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="sticky top-24 space-y-6">
                <TrendingTopics />
                
                {/* Widget de Selos/Achievements */}
                <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Seus Selos
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { emoji: "🏆", name: "Otaku Veterano", color: "from-yellow-400 to-orange-400" },
                      { emoji: "⚡", name: "Speed Watcher", color: "from-blue-400 to-cyan-400" },
                      { emoji: "💝", name: "Fã Dedicado", color: "from-pink-400 to-purple-400" },
                      { emoji: "🎭", name: "Cosplayer", color: "from-green-400 to-cyan-400" },
                      { emoji: "📚", name: "Manga Reader", color: "from-purple-400 to-pink-400" },
                      { emoji: "🌟", name: "Influencer", color: "from-orange-400 to-red-400" }
                    ].map((selo, index) => (
                      <motion.div 
                        key={index} 
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selo.color} flex items-center justify-center shadow-lg cursor-pointer`}
                        title={selo.name}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <span className="text-2xl">{selo.emoji}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Widget de Amigos Online */}
                <div className="glass-card rounded-2xl p-6 border border-green-500/20 backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Amigos Online
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Sakura", avatar: "🌸", status: "Assistindo Demon Slayer" },
                      { name: "Goku", avatar: "⚡", status: "Jogando Dragon Ball" },
                      { name: "Luffy", avatar: "🏴‍☠️", status: "Lendo One Piece" }
                    ].map((friend, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                          <span className="text-sm">{friend.avatar}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate" style={{fontFamily: 'Poppins, sans-serif'}}>{friend.name}</p>
                          <p className="text-xs text-gray-400 truncate" style={{fontFamily: 'Poppins, sans-serif'}}>{friend.status}</p>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Bottom Navigation para mobile */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-pink-500/30 z-50">
            <div className="grid grid-cols-5 gap-1 p-3">
              <motion.button 
                className="flex flex-col items-center py-2 px-1 text-xs group"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-pink-400 mb-1 text-xl group-hover:scale-110 transition-transform">🏠</div>
                <span className="text-gray-300 text-xs" style={{fontFamily: 'Poppins, sans-serif'}}>Home</span>
              </motion.button>
              <motion.button 
                className="flex flex-col items-center py-2 px-1 text-xs group"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-gray-400 mb-1 text-xl group-hover:scale-110 transition-transform group-hover:text-orange-400">🔥</div>
                <span className="text-gray-400 text-xs group-hover:text-gray-300" style={{fontFamily: 'Poppins, sans-serif'}}>Trending</span>
              </motion.button>
              <motion.button 
                className="flex flex-col items-center py-2 px-1 text-xs group"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-gray-400 mb-1 text-xl group-hover:scale-110 transition-transform group-hover:text-green-400">➕</div>
                <span className="text-gray-400 text-xs group-hover:text-gray-300" style={{fontFamily: 'Poppins, sans-serif'}}>Criar</span>
              </motion.button>
              <motion.button 
                className="flex flex-col items-center py-2 px-1 text-xs group"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-gray-400 mb-1 text-xl group-hover:scale-110 transition-transform group-hover:text-purple-400">👤</div>
                <span className="text-gray-400 text-xs group-hover:text-gray-300" style={{fontFamily: 'Poppins, sans-serif'}}>Perfil</span>
              </motion.button>
              <motion.button 
                className="flex flex-col items-center py-2 px-1 text-xs group"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-gray-400 mb-1 text-xl group-hover:scale-110 transition-transform group-hover:text-blue-400">⚙️</div>
                <span className="text-gray-400 text-xs group-hover:text-gray-300" style={{fontFamily: 'Poppins, sans-serif'}}>Config</span>
              </motion.button>
            </div>
          </div>

          {/* Padding bottom para mobile navigation */}
          <div className="lg:hidden h-20"></div>
        </div>
      </div>
    </Layout>
  );
}

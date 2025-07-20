'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Mail, Lock, Heart, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulated login - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'admin@otakufan.com' && password === 'admin123') {
        login({
          id: '1',
          name: 'Admin User',
          username: 'AdminUser',
          email: email,
          avatar: '/avatars/default.svg',
          level: 10,
          xp: 2500,
          badges: ['Fundador', 'Otaku Master'],
          followers: 1250,
          following: 350,
        });
        router.push('/');
      } else {
        setError('Credenciais inválidas. Tente: admin@otakufan.com / admin123');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const badges = [
    { label: 'Novo', color: '#10b981' },
    { label: 'Ativo', color: '#3b82f6' },
    { label: 'Popular', color: '#f59e0b' },
    { label: 'Elite', color: '#8b5cf6' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-1 bg-gradient-to-br from-purple-900 to-pink-900">
      <div className="w-full max-w-xs ultra-compact">
        {/* Logo compacto */}
        <div className="text-center mb-2 ultra-compact">
          <h1 className="text-base font-bold text-white mb-1 ultra-compact">🎌 OtakuFan</h1>
          <p className="text-gray-300 text-xs ultra-compact">Rede social de anime ✨</p>
        </div>

        {/* Form super compacto */}
        <div className="bg-black/30 backdrop-blur-lg rounded p-3 border border-white/20 ultra-compact tiny-spacing">
          <h2 className="text-white text-xs font-medium text-center mb-2 ultra-compact">
            Bem-vindo! ❤️
          </h2>
          
          <form onSubmit={handleSubmit} className="tiny-spacing ultra-compact">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded p-1">
                <p className="text-red-300 text-xs ultra-compact">{error}</p>
              </div>
            )}

            <div className="ultra-compact">
              <label className="text-white text-xs block mb-1 ultra-compact">📧 Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-6 px-2 text-xs rounded bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500 ultra-compact"
                required
              />
            </div>

            <div className="ultra-compact">
              <label className="text-white text-xs block mb-1 ultra-compact">🔒 Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-6 px-2 pr-6 text-xs rounded bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 ultra-compact"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-xs ultra-compact"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium text-xs rounded hover:from-pink-600 hover:to-purple-600 transition-all ultra-compact"
            >
              {isLoading ? '⏳ Entrando...' : '🚀 Entrar'}
            </button>

            <div className="text-center pt-1 ultra-compact">
              <p className="text-gray-400 text-xs mb-1 ultra-compact">
                Não tem conta?{' '}
                <Link href="/signup" className="text-pink-400 hover:text-pink-300 font-medium">
                  Criar
                </Link>
              </p>
              
              <div className="p-1 bg-blue-500/20 border border-blue-500/50 rounded ultra-compact">
                <p className="text-blue-300 text-xs ultra-compact">
                  <strong>Demo:</strong> admin@otakufan.com / admin123
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer compacto */}
        <div className="text-center mt-2">
          <p className="text-gray-500 text-xs ultra-compact">© 2025 OtakuFan 🌍</p>
        </div>
      </div>
    </div>
  );
}

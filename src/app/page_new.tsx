'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/stores';
import { Layout } from '@/components/Layout';
import { Feed } from '@/components/Feed';
import { TrendingTopics } from '@/components/TrendingTopics';
import { QuickActions } from '@/components/QuickActions';
import { useRouter } from 'next/navigation';

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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando OtakuFan...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirecionando para login
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar esquerda - Ações rápidas */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>

        {/* Feed principal */}
        <div className="lg:col-span-2">
          <Feed />
        </div>

        {/* Sidebar direita - Trending */}
        <div className="lg:col-span-1">
          <TrendingTopics />
        </div>
      </div>
    </Layout>
  );
}

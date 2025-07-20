import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Sistema de níveis
export const LEVELS = [
  { level: 1, name: "Novato Otaku", xpRequired: 0, benefits: ["Acesso básico"], color: "#9CA3AF" },
  { level: 2, name: "Anime Fan", xpRequired: 100, benefits: ["Badge especial"], color: "#60A5FA" },
  { level: 3, name: "Manga Reader", xpRequired: 300, benefits: ["Comunidades exclusivas"], color: "#34D399" },
  { level: 4, name: "Cosplayer", xpRequired: 600, benefits: ["Upload de vídeos longos"], color: "#FBBF24" },
  { level: 5, name: "Otaku Senpai", xpRequired: 1000, benefits: ["Moderação de comunidades"], color: "#F87171" },
  { level: 6, name: "Anime Guru", xpRequired: 1500, benefits: ["Badge rara"], color: "#A78BFA" },
  { level: 7, name: "Weeb Master", xpRequired: 2200, benefits: ["Personalização avançada"], color: "#FB7185" },
  { level: 8, name: "Otaku Legend", xpRequired: 3000, benefits: ["Badge épica"], color: "#10B981" },
  { level: 9, name: "Anime God", xpRequired: 4000, benefits: ["Badge lendária"], color: "#F59E0B" },
  { level: 10, name: "Supreme Otaku", xpRequired: 5500, benefits: ["Todos os benefícios"], color: "#EF4444" }
];

export function calculateLevel(xp: number) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

export function getXpForAction(action: string) {
  const xpMap: Record<string, number> = {
    'post': 10,
    'like': 1,
    'comment': 5,
    'share': 3,
    'video_upload': 15,
    'community_join': 5,
    'daily_login': 2,
    'profile_complete': 25,
    'first_post': 50,
    'first_video': 100
  };
  return xpMap[action] || 0;
}

// Formatação de datas
export function formatDate(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
}

// Validação de uploads
export function validateFileType(file: File, allowedTypes: string[]) {
  return allowedTypes.includes(file.type);
}

export function validateFileSize(file: File, maxSizeMB: number) {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

// Geração de cores aleatórias para avatars
export function generateAvatarColor(username: string) {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];
  
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

// Busca de animes (mock - integrar com API real depois)
export async function searchAnime(query: string) {
  // Simulação de uma API de anime
  const mockAnimes = [
    { id: 1, title: "Naruto", image: "/api/placeholder/anime1.svg", type: "anime" },
    { id: 2, title: "One Piece", image: "/api/placeholder/anime2.svg", type: "anime" },
    { id: 3, title: "Attack on Titan", image: "/api/placeholder/anime3.svg", type: "anime" },
    { id: 4, title: "Demon Slayer", image: "/api/placeholder/anime4.svg", type: "anime" },
    { id: 5, title: "My Hero Academia", image: "/api/placeholder/anime5.svg", type: "anime" }
  ];
  
  return mockAnimes.filter(anime => 
    anime.title.toLowerCase().includes(query.toLowerCase())
  );
}

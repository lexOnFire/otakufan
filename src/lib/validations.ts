import { z } from 'zod';

// Schema para login
export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

// Schema para registro
export const registerSchema = z.object({
  username: z.string()
    .min(3, 'Username deve ter pelo menos 3 caracteres')
    .max(20, 'Username deve ter no máximo 20 caracteres')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username deve conter apenas letras, números e underscore'),
  email: z.string().email('Email inválido'),
  password: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(100, 'Senha muito longa'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"],
});

// Schema para post
export const postSchema = z.object({
  content: z.string()
    .min(1, 'Conteúdo é obrigatório')
    .max(2000, 'Conteúdo deve ter no máximo 2000 caracteres'),
  type: z.enum(['text', 'image', 'video', 'short_video']),
  tags: z.array(z.string()).max(10, 'Máximo 10 tags'),
  animeReference: z.object({
    id: z.number(),
    title: z.string(),
    image: z.string().optional(),
    type: z.enum(['anime', 'manga', 'character']),
  }).optional(),
});

// Schema para comentário
export const commentSchema = z.object({
  content: z.string()
    .min(1, 'Comentário é obrigatório')
    .max(500, 'Comentário deve ter no máximo 500 caracteres'),
});

// Schema para comunidade
export const communitySchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres'),
  description: z.string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(500, 'Descrição deve ter no máximo 500 caracteres'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  tags: z.array(z.string()).max(10, 'Máximo 10 tags'),
  isPrivate: z.boolean().default(false),
  rules: z.array(z.string()).max(20, 'Máximo 20 regras'),
});

// Schema para recado/scrap
export const scrapSchema = z.object({
  content: z.string()
    .min(1, 'Conteúdo é obrigatório')
    .max(1000, 'Conteúdo deve ter no máximo 1000 caracteres'),
  isPublic: z.boolean().default(true),
});

// Schema para atualização de perfil
export const profileUpdateSchema = z.object({
  bio: z.string().max(300, 'Bio deve ter no máximo 300 caracteres').optional(),
  favoriteAnimes: z.array(z.string()).max(20, 'Máximo 20 animes favoritos').optional(),
});

// Schema para upload de arquivo
export const fileUploadSchema = z.object({
  file: z.object({
    type: z.string(),
    size: z.number(),
    name: z.string(),
  }),
  category: z.enum(['avatar', 'post', 'community', 'video']),
});

// Tipos inferidos dos schemas
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type PostInput = z.infer<typeof postSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type CommunityInput = z.infer<typeof communitySchema>;
export type ScrapInput = z.infer<typeof scrapSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type FileUploadInput = z.infer<typeof fileUploadSchema>;

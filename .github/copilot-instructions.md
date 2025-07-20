# OtakuFan - Rede Social de Anime

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Contexto do Projeto
Este é o OtakuFan, uma rede social inspirada no Orkut com temática de anime e cultura geek. 

## Tecnologias Principais
- **Frontend/Backend**: Next.js 15 com TypeScript e App Router
- **Estilização**: Tailwind CSS com componentes customizados
- **Banco de Dados**: MongoDB com Mongoose
- **Autenticação**: NextAuth.js com JWT
- **Upload de Mídia**: Cloudinary para vídeos e imagens
- **Real-time**: Socket.io para chat e notificações
- **Validação**: Zod para validação de schemas

## Características Específicas
- **Sistema de Gamificação**: Níveis, XP, selos/badges baseados em interações
- **Vídeos Curtos**: Feed estilo TikTok para conteúdo de anime
- **Sistema de Fãs**: Fãs, super fãs, e seguidores
- **Comunidades**: Grupos temáticos de anime/manga
- **Mural de Recados**: Sistema clássico do Orkut
- **Design**: Tema escuro com elementos de anime e cores vibrantes

## Padrões de Código
- Use TypeScript strict mode
- Componentes funcionais com hooks
- Server components quando possível
- API routes para backend
- Middleware para autenticação
- Error boundaries para tratamento de erros
- Loading states e skeleton screens

## Estrutura de Pastas
- `/src/app` - Pages e API routes (App Router)
- `/src/components` - Componentes reutilizáveis
- `/src/lib` - Utilitários, schemas, e configurações
- `/src/types` - Definições de tipos TypeScript
- `/src/hooks` - Custom hooks
- `/src/stores` - Estado global (Zustand)

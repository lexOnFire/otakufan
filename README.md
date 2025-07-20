# 🎌 OtakuFan - Rede Social de Anime

<div align="center">

![OtakuFan Logo](https://img.shields.io/badge/🎌-OtakuFan-ff6b9d?style=for-the-badge&labelColor=1a1a2e)

Uma rede social inspirada no Orkut com temática de anime e cultura geek, desenvolvida com Next.js 15 e tecnologias modernas.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?logo=mongodb)](https://www.mongodb.com/)

[🚀 Demo](#) • [📖 Documentação](#funcionalidades) • [🐛 Issues](https://github.com/lexOnFire/otakufan/issues) • [💬 Discord](#)

</div>

## ✨ Funcionalidades

### 🔐 **Autenticação & Perfil**
- Sistema completo de login/registro
- Perfis personalizáveis com avatares
- Sistema de níveis e XP
- Badges e conquistas

### 📱 **Interface & Design**
- Design responsivo mobile-first
- Tema escuro com elementos vibrantes
- Glassmorphism e animações suaves
- Interface inspirada no Orkut clássico

### 🎮 **Sistema de Gamificação**
- Níveis baseados em XP
- Sistema de badges/selos
- Conquistas por atividades
- Rankings e estatísticas

### 📺 **Conteúdo de Mídia**
- Feed de vídeos curtos (estilo TikTok)
- Upload de imagens e vídeos
- Integração com Cloudinary
- Player de vídeo customizado

### 👥 **Social Features**
- Sistema de fãs e super fãs
- Mural de recados clássico
- Comments e reactions
- Sistema de seguir/seguidor

### 🏠 **Comunidades**
- Criação de comunidades temáticas
- Grupos de discussão de anime/manga
- Moderação de conteúdo
- Eventos e encontros

### 💬 **Chat & Notificações**
- Chat em tempo real (Socket.io)
- Notificações push
- Mensagens privadas
- Status online/offline

## 🛠️ Tech Stack

### **Frontend & Backend**
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário

### **Database & Auth**
- **MongoDB** - Banco NoSQL
- **Mongoose** - ODM para MongoDB
- **NextAuth.js** - Autenticação
- **JWT** - Tokens de sessão

### **UI & Animations**
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

### **Real-time & Media**
- **Socket.io** - Comunicação em tempo real
- **Cloudinary** - Upload e otimização de mídia
- **Zod** - Validação de schemas

### **State & Utils**
- **Zustand** - Gerenciamento de estado
- **React Hook Form** - Formulários
- **Date-fns** - Manipulação de datas

## 🚀 Getting Started

### **Pré-requisitos**
- Node.js 18+ 
- MongoDB (local ou Atlas)
- Conta Cloudinary (para upload de mídia)

### **Instalação**

1. **Clone o repositório**
```bash
git clone https://github.com/lexOnFire/otakufan.git
cd otakufan
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas configurações:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/otakufan

# NextAuth
NEXTAUTH_SECRET=seu-secret-super-secreto
NEXTAUTH_URL=http://localhost:3000

# Cloudinary
CLOUDINARY_CLOUD_NAME=seu-cloud-name
CLOUDINARY_API_KEY=sua-api-key
CLOUDINARY_API_SECRET=seu-api-secret

# JWT
JWT_SECRET=seu-jwt-secret
```

4. **Execute o projeto**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🎉

### **Demo Account**
- **Email:** admin@otakufan.com
- **Senha:** admin123

## 📁 Estrutura do Projeto

```
src/
├── app/                 # Pages e API routes (App Router)
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página inicial
│   ├── login/          # Página de login
│   └── api/            # API routes
├── components/         # Componentes reutilizáveis
│   ├── ui/            # Componentes base (Radix)
│   ├── Feed.tsx       # Feed principal
│   ├── Sidebar.tsx    # Barra lateral
│   └── ...
├── lib/               # Utilitários e configurações
│   ├── auth.ts        # Configuração NextAuth
│   ├── db.ts          # Conexão MongoDB
│   ├── utils.ts       # Funções utilitárias
│   └── validations.ts # Schemas Zod
├── types/             # Definições TypeScript
├── hooks/             # Custom hooks
└── stores/            # Estado global (Zustand)
```

## 🎨 Design System

### **Cores Principais**
- **Primary:** `#667eea` (Roxo anime)
- **Secondary:** `#ff6b9d` (Rosa vibrante)
- **Accent:** `#f8b500` (Dourado)
- **Background:** `#0f0f23` (Azul escuro)

### **Tipografia**
- **Headings:** Orbitron (futurista)
- **Body:** Poppins (legível)
- **Code:** JetBrains Mono

### **Componentes**
- Glassmorphism com backdrop-blur
- Gradientes vibrantes
- Animações suaves
- Modo escuro por padrão

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Sistema de stories
- [ ] Marketplace de merchandise
- [ ] Integração com APIs de anime (MyAnimeList, AniList)
- [ ] Sistema de recomendações
- [ ] App mobile (React Native)
- [ ] Modo claro
- [ ] Internacionalização (i18n)
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Alex** - [@lexOnFire](https://github.com/lexOnFire)

---

<div align="center">

**Feito com ❤️ para a comunidade otaku**

[⬆ Voltar ao topo](#-otakufan---rede-social-de-anime)

</div>

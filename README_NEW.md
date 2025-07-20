# 🎌 OtakuFan - Rede Social Otaku

![OtakuFan Banner](https://via.placeholder.com/800x300/1f2937/f8fafc?text=OtakuFan%20-%20Rede%20Social%20Otaku)

OtakuFan é uma rede social moderna e responsiva voltada para a comunidade otaku, com recursos avançados de gamificação, sistema de níveis, e suporte completo para mobile.

## ✨ Principais Recursos

### 🎬 Conteúdo
- **Feed Principal** - Timeline com posts, vídeos e shorts
- **Vídeos Curtos** - Sistema similar ao TikTok para conteúdo rápido
- **Upload de Mídia** - Imagens, vídeos e shorts com controles interativos
- **Referências de Anime** - Sistema de tags e referências

### 🏆 Gamificação
- **Sistema de Níveis** - XP e progressão visual
- **Badges e Selos** - Conquistas por atividades
- **Missões Diárias** - Tarefas para ganhar XP
- **Fãs e Super Fãs** - Sistema de seguidores melhorado

### 👥 Social
- **Comunidades** - Grupos temáticos
- **Mural de Recados** - Mensagens no perfil
- **Sistema de Curtidas** - Interações melhoradas
- **Comentários** - Com sistema de respostas

### 📱 Design Moderno
- **Totalmente Responsivo** - Mobile-first design
- **Dark Theme** - Interface escura moderna
- **Animações Suaves** - Transições e efeitos
- **Navegação Intuitiva** - Sidebar adaptável e bottom nav mobile

## 🚀 Tecnologias

### Frontend
- **Next.js 15** - React framework com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização responsiva
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações
- **Zustand** - Gerenciamento de estado

### Backend & Database
- **Next.js API Routes** - Backend integrado
- **MongoDB** - Database NoSQL
- **Mongoose** - ODM para MongoDB
- **NextAuth.js** - Autenticação completa

### Media & Real-time
- **Cloudinary** - Upload e processamento de mídia
- **Socket.io** - Comunicação em tempo real
- **Zod** - Validação de dados

## 🎨 Melhorias de Design Implementadas

### Interface Responsiva
- **Mobile-First** - Design otimizado para celulares
- **Sidebar Deslizante** - Menu lateral que desliza suavemente
- **Bottom Navigation** - Navegação inferior para mobile
- **Grid Adaptável** - Layout que se ajusta a qualquer tela

### Componentes Modernos
- **Cards com Hover** - Efeitos de sombra e escala
- **Avatares Gradientes** - Fallbacks coloridos
- **Badges Interativos** - Indicadores visuais melhorados
- **Progress Bars** - Barras de progresso animadas

### Experiência de Usuário
- **Transições Suaves** - Animações de 200-300ms
- **Estados de Loading** - Feedback visual durante carregamento
- **Overflow Handling** - Texto truncado com tooltips
- **Touch Targets** - Botões adequados para touch

## 📱 Recursos Mobile

### Navegação Mobile
```tsx
// Bottom Navigation com 5 itens principais
<div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
  <div className="grid grid-cols-5 h-16">
    {/* Home, Explore, Create, Communities, Profile */}
  </div>
</div>
```

### Sidebar Responsiva
```tsx
// Sidebar que desliza sobre o conteúdo no mobile
<div className={cn(
  "fixed inset-y-0 left-0 z-50 w-64 bg-card transform transition-transform duration-300",
  isSidebarOpen ? "translate-x-0" : "-translate-x-full",
  "md:relative md:translate-x-0"
)}>
```

### Layout Adaptável
```tsx
// Grid que se ajusta ao tamanho da tela
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-6">
  <Sidebar />
  <Feed />
  <TrendingTopics />
</div>
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- MongoDB (local ou Atlas)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/otaku_fan.git
cd otaku_fan

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Execute o projeto
npm run dev
```

### Variáveis de Ambiente
```env
# Database
MONGODB_URI=mongodb://localhost:27017/otakufan

# Authentication
NEXTAUTH_SECRET=sua_secret_key_aqui
NEXTAUTH_URL=http://localhost:3000

# Cloudinary (para upload de mídia)
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
```

## 🎮 Demo

### Acesso de Demonstração
- **URL**: http://localhost:3000
- **Email**: `demo@otakufan.com`
- **Senha**: `demo123`

### Funcionalidades Testáveis
- ✅ Login/logout funcional
- ✅ Feed responsivo com posts
- ✅ Sistema de likes interativo
- ✅ Navegação mobile/desktop
- ✅ Sidebar deslizante
- ✅ Missões diárias
- ✅ Trending topics
- ✅ Sistema de níveis

## 📂 Estrutura Atualizada

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── (auth)/            # Rotas de autenticação
│   │   ├── login/         # ✅ Página de login melhorada
│   │   └── register/      # Página de registro
│   ├── globals.css        # ✅ Estilos globais atualizados
│   ├── layout.tsx         # ✅ Layout principal responsivo
│   └── page.tsx           # ✅ Homepage redesenhada
├── components/            # ✅ Componentes modernizados
│   ├── ui/               # Componentes base do Radix UI
│   ├── Feed.tsx          # ✅ Feed responsivo com mídia
│   ├── Layout.tsx        # ✅ Layout wrapper responsivo
│   ├── Navigation.tsx    # ✅ Nav bar moderna
│   ├── Sidebar.tsx       # ✅ Sidebar deslizante
│   ├── TrendingTopics.tsx # ✅ Topics melhorados
│   └── QuickActions.tsx  # ✅ Ações responsivas
├── lib/                  
│   ├── utils.ts          # ✅ Utilitários + cn helper
│   └── ...
└── stores/               
    └── index.ts          # ✅ Store com sidebar state
```

## 🎯 Melhorias Implementadas

### ✅ Design & UX
- [x] **Layout Responsivo Completo** - Mobile, tablet e desktop
- [x] **Sidebar Deslizante** - Animação suave no mobile
- [x] **Bottom Navigation** - Navegação inferior para mobile
- [x] **Cards Modernos** - Hover effects e sombras
- [x] **Avatares Gradientes** - Fallbacks coloridos
- [x] **Typography Melhorada** - Tamanhos responsivos

### ✅ Componentes
- [x] **Feed Responsivo** - Posts, imagens e vídeos
- [x] **Navigation Bar** - Sticky e adaptável
- [x] **Trending Topics** - Layout melhorado
- [x] **Quick Actions** - Botões responsivos
- [x] **Progress Bars** - Animadas e estilizadas

### ✅ Interações
- [x] **Touch Targets** - Botões adequados para mobile
- [x] **Hover States** - Efeitos visuais no desktop
- [x] **Loading States** - Feedback durante ações
- [x] **Transitions** - Animações suaves em tudo

### 🚧 Próximas Melhorias
- [ ] **PWA** - Progressive Web App
- [ ] **Offline Support** - Funcionalidade offline
- [ ] **Push Notifications** - Notificações push
- [ ] **Infinite Scroll** - Carregamento infinito
- [ ] **Image Optimization** - Lazy loading avançado

## 🎨 Design System

### Cores Principais
```css
/* Gradientes principais */
.gradient-primary { @apply bg-gradient-to-r from-pink-500 to-purple-600; }
.gradient-secondary { @apply bg-gradient-to-r from-blue-500 to-cyan-500; }
.gradient-accent { @apply bg-gradient-to-r from-green-500 to-blue-500; }

/* Cores de fundo */
.bg-background { @apply bg-gray-950; }
.bg-card { @apply bg-gray-900; }
.bg-accent { @apply bg-gray-800; }
```

### Espaçamentos Responsivos
```css
/* Padding responsivo */
.responsive-padding { @apply p-4 md:p-6; }

/* Margins responsivos */
.responsive-margin { @apply space-y-4 md:space-y-6; }

/* Grid responsivo */
.responsive-grid { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3; }
```

### Breakpoints
```css
/* Mobile First */
sm: '640px'   /* Small devices */
md: '768px'   /* Medium devices */
lg: '1024px'  /* Large devices */
xl: '1280px'  /* Extra large devices */
2xl: '1536px' /* 2X large devices */
```

## 📱 Guia de Responsividade

### Mobile (< 768px)
- Navigation: Bottom navigation bar
- Sidebar: Overlay deslizante
- Layout: Coluna única
- Cards: Width completa
- Text: Tamanhos menores (text-sm)

### Tablet (768px - 1024px)
- Navigation: Top bar expandida
- Sidebar: Colapsível
- Layout: Duas colunas
- Cards: Grid 2x2
- Text: Tamanhos médios (text-base)

### Desktop (> 1024px)
- Navigation: Full top bar
- Sidebar: Fixa e expandida
- Layout: Três colunas
- Cards: Grid 3x3
- Text: Tamanhos completos (text-lg)

## 🚀 Performance

### Otimizações Implementadas
- **Lazy Loading** - Componentes carregados sob demanda
- **Image Optimization** - Next.js Image component
- **Code Splitting** - Bundle otimizado por rota
- **Tree Shaking** - Eliminação de código morto
- **CSS Purging** - Tailwind CSS otimizado

### Métricas Alvo
- **FCP** < 1.5s (First Contentful Paint)
- **LCP** < 2.5s (Largest Contentful Paint)
- **CLS** < 0.1 (Cumulative Layout Shift)
- **FID** < 100ms (First Input Delay)

## 🤝 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código
- **TypeScript** - Sempre tipado
- **Tailwind** - Classes utilitárias
- **Responsivo** - Mobile-first sempre
- **Acessibilidade** - ARIA labels e keyboard navigation

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>🎌 Feito com ❤️ para a comunidade otaku 🎌</p>
  <p>
    <strong>OtakuFan</strong> - Conectando otakus ao redor do mundo
  </p>
</div>

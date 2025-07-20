import type { Metadata } from "next";
import { Inter, Poppins, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: "OtakuFan - Rede Social Otaku",
  description: "A rede social dos verdadeiros otakus! Conecte-se com outros fãs de anime, compartilhe conteúdo e suba de nível na maior comunidade otaku do Brasil.",
  keywords: ["anime", "manga", "otaku", "rede social", "comunidade", "cosplay", "japan"],
  authors: [{ name: "OtakuFan Team" }],
  openGraph: {
    title: "OtakuFan - Rede Social Otaku",
    description: "A rede social dos verdadeiros otakus!",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FF6B9D" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${nunito.variable} antialiased min-h-screen bg-anime-pattern`}>
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-float-anime opacity-60"></div>
            <div className="absolute top-32 right-20 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float-anime opacity-40" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full animate-float-anime opacity-50" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 right-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float-anime opacity-30" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-float-anime opacity-40" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-float-anime opacity-50" style={{animationDelay: '2.5s'}}></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Eye, EyeOff, Mail, Lock, User, Check, X } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const router = useRouter();

  // Validação da senha
  const passwordValidation = {
    length: formData.password.length >= 6,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
  };

  const passwordStrength = Object.values(passwordValidation).filter(Boolean).length;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando o usuário digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username) {
      newErrors.username = 'Username é obrigatório';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username deve ter pelo menos 3 caracteres';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username deve conter apenas letras, números e underscore';
    }

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulação de registro - substituir por API real
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirecionar para login após registro bem-sucedido
      router.push('/login?message=Conta criada com sucesso! Faça login para continuar.');
    } catch (error) {
      setErrors({ general: 'Erro ao criar conta. Tente novamente.' });
      console.error('Register error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🎌</div>
        <div className="absolute top-32 right-20 text-4xl">⚡</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌸</div>
        <div className="absolute bottom-32 right-10 text-3xl">🎭</div>
        <div className="absolute top-1/2 left-1/4 text-2xl">🗾</div>
        <div className="absolute top-1/3 right-1/3 text-4xl">🎎</div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
            OtakuFan
          </h1>
          <p className="text-gray-300 text-sm">
            Junte-se à maior comunidade otaku do Brasil!
          </p>
        </div>

        {/* Register Form */}
        <Card className="bg-black/40 backdrop-blur-lg border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-white">
              Criar Nova Conta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-md text-sm">
                  {errors.general}
                </div>
              )}

              {/* Username */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="seu_username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-400 text-xs">{errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Password Strength */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Força da senha</span>
                      <span className="text-gray-400">
                        {passwordStrength}/4
                      </span>
                    </div>
                    <Progress 
                      value={(passwordStrength / 4) * 100} 
                      className="h-1.5"
                    />
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className={`flex items-center space-x-1 ${passwordValidation.length ? 'text-green-400' : 'text-gray-400'}`}>
                        {passwordValidation.length ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        <span>6+ caracteres</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordValidation.uppercase ? 'text-green-400' : 'text-gray-400'}`}>
                        {passwordValidation.uppercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        <span>Maiúscula</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordValidation.lowercase ? 'text-green-400' : 'text-gray-400'}`}>
                        {passwordValidation.lowercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        <span>Minúscula</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordValidation.number ? 'text-green-400' : 'text-gray-400'}`}>
                        {passwordValidation.number ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        <span>Número</span>
                      </div>
                    </div>
                  </div>
                )}

                {errors.password && (
                  <p className="text-red-400 text-xs">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirme sua senha"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="pl-10 pr-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs">{errors.confirmPassword}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Criando conta...
                  </div>
                ) : (
                  'Criar Conta'
                )}
              </Button>

              <div className="text-xs text-gray-400 text-center">
                Ao criar uma conta, você concorda com nossos{' '}
                <Link href="/terms" className="text-pink-400 hover:underline">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="/privacy" className="text-pink-400 hover:underline">
                  Política de Privacidade
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-300 text-sm">
            Já tem uma conta?{' '}
            <Link
              href="/login"
              className="text-pink-400 hover:text-pink-300 font-medium underline"
            >
              Faça login
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 space-y-3">
          <p className="text-center text-gray-300 text-sm font-medium">
            🎉 Benefícios de ser um OtakuFan:
          </p>
          <div className="grid grid-cols-1 gap-2 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500/20 text-green-300 border-green-500 text-xs">
                ✨
              </Badge>
              <span>Sistema de níveis e gamificação</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500 text-xs">
                🎬
              </Badge>
              <span>Upload de vídeos curtos e longos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500 text-xs">
                👥
              </Badge>
              <span>Participe de comunidades exclusivas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-pink-500/20 text-pink-300 border-pink-500 text-xs">
                🏆
              </Badge>
              <span>Conquiste selos e badges únicos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Button from "@/components/Button";
import Input from "@/components/Input/index";
import { useRouter } from "next/navigation";
import { useRef, useState } from 'react';
import '../login/login.css';
import { GoogleLogin } from '@react-oauth/google';
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  // Estado para alternar entre os formulários de login e cadastro
  const [isActive, setIsActive] = useState(false);

  // Referências para os formulários
  const registerFormRef = useRef<HTMLFormElement>(null);
  const loginFormRef = useRef<HTMLFormElement>(null);

  const initialLoginForm = {
    email: '',
    senha: ''
  };

  const [formData, setFormData] = useState(initialLoginForm);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para autenticação ou cadastro via Google
  const handleGoogleLogin = async (credentialResponse: any) => {
    if (credentialResponse.credential) {
      try {
        const response = await fetch('http://localhost:8080/usuarios/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: credentialResponse.credential }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login bem-sucedido com Google:', data);
          
          // Redireciona para o dashboard
          router.push('/dashboard'); 
        } else {
          console.error('Erro no login com Google:', response.statusText);
          setError('Falha no login com Google.');
        }
      } catch (error) {
        console.error('Erro na autenticação com Google:', error);
        setError('Erro ao processar autenticação com Google.');
      }
    } else {
      setError('Nenhum token recebido do Google.');
    }
  };

  // Função para cadastro via email/senha
  const handleSubmitCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Cadastro realizado com sucesso.');
        router.push('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError('Erro ao processar o cadastro.');
    } finally {
      setLoading(false);
    }
  };

  // Função para login via email/senha
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Login realizado com sucesso.');
        
        // Redireciona para o dashboard após login
        router.push('/dashboard'); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao realizar login.');
      }
    } catch (error) {
      console.error('Erro ao logar:', error);
      setError('Erro ao processar o login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        {/* Formulário de Cadastro */}
        <div className={`form-container sign-up ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          <form onSubmit={handleSubmitCadastro} ref={registerFormRef} noValidate>
            <h1>Criar Conta</h1>
            <span>Use seu e-mail para registro</span>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={formData.email}
              handleChange={(_, e) => handleChange(e)}
              required
            />
            <Input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              minLength={6}
              value={formData.senha}
              handleChange={(_, e) => handleChange(e)}
              required
            />
            <div className="flex items-center w-full my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500"> ou </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError('Falha no login com o Google.')}
              text="continue_with"
            />

            <Link href="/dashboard">
              <Button type="submit" disabled={loading}>
                {loading ? 'Carregando...' : 'Cadastrar'}
              </Button>
            </Link>
          </form>
        </div>

        {/* Formulário de Login */}
        <div className={`form-container sign-in ${isActive ? 'opacity-0' : 'opacity-100'}`}>
          <form onSubmit={handleSubmitLogin} ref={loginFormRef} noValidate>
            <h1>Login</h1>
            <Input
              label="E-mail"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={formData.email}
              handleChange={(_, e) => handleChange(e)}
              required
            />
            <Input
              label="Senha"
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              minLength={6}
              value={formData.senha}
              handleChange={(_, e) => handleChange(e)}
              required
            />
            <div className="flex items-center w-full my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500"> ou </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError('Falha no login com o Google.')}
              text="continue_with"
            />

            <a href="#">Esqueceu sua Senha?</a>
            <Link href="/dashboard">
              <Button type="submit" disabled={loading}>
                {loading ? 'Carregando...' : 'Entrar'}
              </Button>
            </Link>

          </form>
        </div>

        {/* Toggle entre Formulários */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem-vindo de Volta!</h1>
              <p>Insira seus dados pessoais para usar todos os recursos do site</p>
              <button onClick={() => setIsActive(false)}>Entrar</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Olá, Amigo!</h1>
              <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
              <button onClick={() => setIsActive(true)}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

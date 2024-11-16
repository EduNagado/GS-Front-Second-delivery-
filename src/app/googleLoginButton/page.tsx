'use client';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

// Função para decodificar o payload do JWT
const decodeJWT = (token: string) => {
  const base64Url = token.split('.')[1]; // Pega o payload
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );
  return JSON.parse(jsonPayload);
};

export default function GoogleLoginButton() {
  const handleLoginSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      try {
        // Decodifica o token JWT manualmente
        const user = decodeJWT(credentialResponse.credential);
        console.log('Usuário logado:', user);

        // Envia os dados do token para o backend
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: credentialResponse.credential }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao enviar dados para o backend');
            }
            return response.json();
          })
          .then((data) => {
            console.log('Resposta do backend:', data);
          })
          .catch((error) => {
            console.error('Erro ao enviar dados para o backend:', error);
          });
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    } else {
      console.error('Nenhum token foi recebido.');
    }
  };

  const handleLoginError = () => {
    console.error('Falha ao fazer login com o Google.');
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
      text="continue_with"
    />
  );
}

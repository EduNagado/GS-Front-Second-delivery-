'use client';
import Button from "@/components/Button";
import Input from "@/components/Input/index";
import '../login/login.css';
/* Google */
import { GoogleLogin } from '@react-oauth/google';
/* Cadastro e Login*/
import { auth, db } from '../dashboard/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, query, where, getDocs,getDoc , collection } from 'firebase/firestore';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRouter } from "next/router";

/* O codigo ta todo ok, mas nn foi testado pq a apikey nn foi mandada: ainda preciso saber como transforma e depois ver a aba de DashboardInvestimento */


export default function Login() {
      /* Google */
        const decodeJWT = (token: string) => {
          // Separa o token nas partes (header, payload, signature)
          const base64Url = token.split('.')[1];
          
          // Decodifica a string Base64Url em uma string JSON
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Substitui os caracteres para Base64 padrão
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          
          // Retorna o objeto do payload
          return JSON.parse(jsonPayload);
        };

        const handleLoginSuccess = (credentialResponse: any) => {
          if (credentialResponse.credential) {
            try {
              // Decodifica o token JWT manualmente
              const user = decodeJWT(credentialResponse.credential);
              console.log('Usuário logado:', user);
              
              // Salve os dados do usuário ou envie para o back-end
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

      /* Google */


    /* Config de CADASTRO  */
      const navigate = useNavigate();
      const [userType, setUserType] = useState('cliente');
      const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [error, setError] = useState<string>('');
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
   
      const handleSubmit = async (e:any) => {
        e.preventDefault();
        const { email, password} = formData;
    
        try {
          // Check if the user already exists in the database
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('email', '==', email));
          const querySnapshot = await getDocs(q);
    
          if (!querySnapshot.empty) {
            setError('User with this email already exists.');
            return;
          }
    
          // Create the new user
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
    
          // Prepare role-specific data for Firestore
          let userDocData = {
            email,
            userType,
          };
    
          if (userType === 'organization') {
            userDocData = {
              ...userDocData,
            };
          } else if (userType === 'cliente') {
            userDocData = {
              ...userDocData
            };
          }
    
          // Save the user details in Firestore
          await setDoc(doc(db, 'users', user.uid), userDocData);
    
          console.log('User registered and data saved:', userDocData);
          navigate('/login'); // Redirect to login page after successful signup
        } catch (errorr:any) {
          console.error('Error during registration:', errorr.message);
          setError('Error during registration: ' + errorr.message);
        }
      };
    /* Config de CADASTRO */  

    /* Config de LOGIN */   
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState('');
      

      const handleSubmitt = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
          // Authenticate the user with Firebase Auth
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // Check if user data exists in Firestore
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            // User data exists in Firestore
            navigate('/dashboard'); // Navigate to dashboard (adjust path if necessary)
          } else {
            // User data does not exist
            setMessage('Account not found. Please create an account.');
          }
        } catch (error:any) {
          // Handle specific Firebase Auth errors for better feedback
          if (error.code === 'auth/wrong-password') {
            setMessage('Incorrect password. Please try again.');
          } else if (error.code === 'auth/user-not-found') {
            setMessage('No account found with this email. Please create an account.');
          } else {
            setMessage('Login failed. Please check your credentials.');
          }
          console.error('Error during login:', error.message);
        } finally {
          setLoading(false);
        }
      };

      const [isActive, setIsActive] = useState(false);
      const router = useRouter();
    /* Config de LOGIN */  
  
    return (
      <>
        <section>
          <div id="container">
            <div className={`form-container sign-up  'opacity-100' : 'opacity-0'}`}>
              <form onSubmit={handleSubmit} >
                <h1>Criar Conta</h1>
                <span>Use seu e-mail para registro</span>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Senha"
                  minLength={6}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                
                <div className="flex items-center w-full my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-4 text-gray-500"> ou </span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                  text="continue_with"
                />      

                <Button type="submit" >
                  Cadastrar
                </Button>
              </form>
            </div>
            <div className={`form-container sign-in  'opacity-0' : 'opacity-100'}`}>
              <form onSubmit={handleSubmitt} >
                <h1>Login</h1>
                <Input
                  label='E-mail'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  label='Senha'
                  type='password'
                  name='senha'
                  id='senha'
                  placeholder='Senha'
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                
                <div className="flex items-center w-full my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-4 text-gray-500"> ou </span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                  text="continue_with"
                />   


                <a href="#">Esqueceu sua Senha?</a>
                <Button type="submit">
                  Entrar
                </Button>
              </form>
            </div>
            <div className="toggle-container">
              <div className="toggle">
                <div className="toggle-panel toggle-left">
                  <h1>Bem-vindo de Volta!</h1>
                  <p>Faça login para acessar a área de investimentos e aproveitar nossos recursos.</p>
                  <button onClick={() => setIsActive(false)}>Entrar</button>
                </div>
                <div className="toggle-panel toggle-right">
                  <h1>Bem-vindo à nossa plataforma!</h1>
                  <p>Crie sua conta agora para começar a investir com a gente.</p>
                  <button onClick={() => setIsActive(true)}>Cadastrar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
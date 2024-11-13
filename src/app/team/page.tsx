import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Team() {
  const teamMembers = [
    {
      name: 'Eduardo Henrique S. Nagado',
      role: 'Co-Founder / CEO',
      description:
        'Como co-fundador e CEO da MEF, fui responsável pelo desenvolvimento do front-end do site, garantindo uma interface moderna, funcional e intuitiva. Meu foco foi criar uma experiência de usuário fluida e adaptável para todos os dispositivos, priorizando a usabilidade e a estética.',
      rm: 'RM: 558158',
      turma: '1TDSPI',
      imageSrc: '/imgSobre/Edu.png',
      githubUrl: 'https://github.com/EduNagado',
      linkedinUrl: 'https://www.linkedin.com/in/eduardo-nagado-15b319261',
    },
    {
      name: 'Felipe Silva Maciel',
      role: 'Co-Founder / CTO',
      description:
        'Como CTO e co-fundador, fui responsável pela arquitetura técnica do projeto, desenvolvendo a inteligência artificial que impulsiona a automação no nosso sistema. Além disso, implementei o backend em Java, garantindo robustez, escalabilidade e alta performance.',
      rm: 'RM: 555307',
      turma: '1TDSPO',
      imageSrc: '/imgSobre/Lipe.png',
      githubUrl: 'https://github.com/fesilva2109',
      linkedinUrl: 'https://www.linkedin.com/in/felipe-silva-maciel-8993b127b/',
    },
    {
      name: 'Mateus Silveira Cezar',
      role: 'Co-Founder / Tech Lead',
      description:
        'Como Tech Lead e co-fundador, fui responsável pela implementação do banco de dados do projeto, utilizando SQL para garantir que a estrutura de dados fosse eficiente, segura e escalável. Também atuei no desenvolvimento do backend em Python, integrando as soluções com o restante da arquitetura.',
      rm: 'RM: 557560',
      turma: '1TDSPI',
      imageSrc: '/imgSobre/mateus.jpg',
      githubUrl: 'https://github.com/MateusSilveiraCezar',
      linkedinUrl: 'https://www.linkedin.com/in/mateus-silveira-cezar-b1b92b2b5/',
    },
  ];

  return (
    <div id='team' className="min-h-screen bg-[#1F2937] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Seção de Texto */}
          <div className="w-full md:w-2/5 lg:w-1/3 p-8 text-white">
            <h2 className="text-4xl font-bold text-white">Conheça Nossa Equipe</h2>
            <p className="mt-4 text-gray-400">
              Somos uma equipe dinâmica e apaixonada de inovadores, cada um contribuindo com habilidades e expertise únicas para criar soluções avançadas e impactantes. Nosso objetivo coletivo é impulsionar o progresso e a excelência, utilizando tecnologias de ponta para resolver problemas complexos e causar um impacto duradouro.
            </p>
          </div>
          {/* Seção de Cards */}
          <div className="w-full md:w-3/5 lg:w-2/3 p-8 space-y-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-[#374151] shadow-lg p-6 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
              >
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="text-left text-white">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.rm}</p>
                  <p className="text-sm text-gray-400">{member.turma}</p>
                  <p className="mt-2 text-gray-300">{member.description}</p>
                  <div className="flex mt-4 space-x-4">
                    {/* Ícones do GitHub e LinkedIn */}
                    <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-gray-400 hover:text-white w-6 h-6" />
                    </a>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-gray-400 hover:text-white w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

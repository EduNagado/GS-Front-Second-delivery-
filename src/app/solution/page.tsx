import Image from 'next/image';
import { MapIcon, LinkIcon, SunIcon, ChartBarIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Mapeamento Inteligente',
    description:
      'Utilizamos tecnologias de geolocalização para identificar regiões específicas sem eletrificação, facilitando a escolha de áreas estratégicas para instalação de energia limpa.',
    icon: <MapIcon className='h-6 w-6 text-green-600' />, 
  },
  {
    name: 'Conexão com Investidores',
    description:
      'Conectamos regiões isoladas a investidores e empresas de energia que têm interesse em promover o desenvolvimento sustentável, transformando cada investimento em um impacto direto na vida das pessoas.',
    icon: <LinkIcon className='h-6 w-6 text-green-600' />, 
  },
  {
    name: 'Energia Solar em Comunidades Carentes',
    description:
      'Por meio de usinas de energia solar, levamos luz e novas oportunidades para comunidades, promovendo inclusão e acessibilidade para quem mais precisa.',
    icon: <SunIcon className='h-6 w-6 text-green-600' />, 
  },
  {
    name: 'Retorno Sustentável',
    description:
      'Oferecemos um sistema transparente de investimento em energia limpa, onde as empresas têm retorno enquanto impulsionam um impacto ambiental positivo e mudanças sociais profundas.',
    icon: <ChartBarIcon className='h-6 w-6 text-green-600' />, 
  },
];

export default function Solution() {
  return (
    <div id='ajuda' className="overflow-hidden bg-[#1F2937] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Como Funcionamos</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Unindo Inovação e Sustentabilidade para Transformar Vidas
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Nossa plataforma conecta comunidades sem energia elétrica a investidores dispostos a fazer a diferença, promovendo o acesso à eletricidade de forma sustentável e inclusiva.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 ">
                    <dt className="inline font-semibold text-white">
                      <span aria-hidden="true" className="absolute left-1 top-1">
                        {feature.icon}
                      </span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline  text-slate-400">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Comunidades conectadas pela energia solar"
            src="/imgSolution/1.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
      <section className=" py-12 mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6 animate-fade-in">Benefícios Exclusivos para Investidores e o Impacto da Plataforma</h2>
        <div className="text-center text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed animate-slide-in">
          <p>Nosso ecossistema colaborativo oferece transparência, flexibilidade e parcerias sólidas com empresas do setor de energia. Além de proporcionar energia limpa, leva novas oportunidades para comunidades carentes. Descubra os aspectos que tornam nossa plataforma única e os benefícios para os investidores.</p>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          
            <div 
              className="bg-[#243447] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src="/imgEnergy2/image1.jpg"
                alt="Comunidade sem acesso à energia elétrica"
                className="rounded-md w-full h-48 object-cover mb-4"
                width={500}
                height={300}
              />
              <h3 className="text-xl text-white font-semibold mb-2">Tecnologia de Monitoramento e Transparência</h3>
              <p className='text-slate-400'>Identificamos áreas que carecem de eletrificação e destacamos regiões estratégicas para instalação de energia solar.</p>
            </div>
            <div 
              className="bg-[#243447] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src="/imgEnergy2/image2.jpg"
                alt="Comunidade sem acesso à energia elétrica"
                className="rounded-md w-full h-48 object-cover mb-4"
                width={500}
                height={300}
              />
              <h3 className="text-xl text-white font-semibold mb-2">Conexão com Investidores</h3>
              <p className='text-slate-400'>Nossa plataforma aproxima investidores de comunidades que mais precisam, promovendo um impacto positivo e duradouro.</p>
            </div>
            <div 
              className="bg-[#243447] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src="/imgEnergy2/image3.png"
                alt="Comunidade sem acesso à energia elétrica"
                className="rounded-md w-full h-48 object-cover mb-4"
                width={500}
                height={300}
              />
              <h3 className="text-xl text-white font-semibold mb-2">Instalação de Infraestrutura Sustentável</h3>
              <p className='text-slate-400'>Parceria com empresas locais para instalação de painéis solares e postes, garantindo o acesso à energia de forma segura e sustentável.</p>
            </div>
            <div 
              className="bg-[#243447] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src="/imgEnergy2/image4.png"
                alt="Comunidade sem acesso à energia elétrica"
                className="rounded-md w-full h-48 object-cover mb-4"
                width={500}
                height={300}
              />
              <h3 className="text-xl text-white font-semibold mb-2">Transparência e Impacto Social</h3>
              <p className='text-slate-400'>Dados detalhados sobre o impacto social e ambiental de cada projeto, com retorno garantido para investidores e benefício direto para comunidades.</p>
            </div>
          
        </div>
      </section>
    </div>
  );
}

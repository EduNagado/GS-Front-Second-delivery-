import Image from 'next/image';


export default function Energy() {
    return (
        <div className="min-h-screen bg-[#1F2937] py-12">
            <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex flex-col items-center mt-20 space-y-16">
                
                {/* A Realidade do Acesso à Energia (Primeira seção - Ordem normal) */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <Image
                            src="/imgEnergy/image1.jpg"
                            alt="Comunidade sem acesso à energia elétrica"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h2 className="text-3xl font-bold text-accent">A Realidade do Acesso à Energia</h2>
                        <p className="text-lg text-gray-300">
                            Milhares de pessoas vivem sem acesso confiável a energia elétrica, principalmente em áreas remotas e carentes de infraestrutura...
                        </p>
                    </div>
                </div>

                {/* Impacto Social e Econômico (Segunda seção - Ordem invertida) */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <Image
                            src="/imgEnergy/image2.png"
                            alt="Impacto social e econômico de levar energia"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h2 className="text-3xl font-bold text-accent">Impacto Social e Econômico</h2>
                        <p className="text-lg text-gray-300">
                            A falta de energia sustentável em áreas vulneráveis aumenta a desigualdade social e limita o crescimento econômico...
                        </p>
                    </div>
                </div>

                {/* A Solução Oferecida (Terceira seção - Ordem normal) */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <Image
                            src="/imgEnergy/image3.png"
                            alt="Solução oferecida de painéis solares em comunidades"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h2 className="text-3xl font-bold text-accent">Nossa Solução para o Acesso à Energia</h2>
                        <p className="text-lg text-gray-300">
                            Com o nosso sistema, unimos investidores a um modelo de impacto social: financiar instalações solares em áreas que mais necessitam...
                        </p>
                    </div>
                </div>

                {/* Benefícios para as Comunidades (Quarta seção - Ordem invertida) */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <Image
                            src="/imgEnergy/image4.png"
                            alt="Benefícios trazidos pela energia solar"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h2 className="text-3xl font-bold text-accent">Benefícios para as Comunidades</h2>
                        <p className="text-lg text-gray-300">
                            Ao oferecer energia solar a essas áreas, promovemos a geração de empregos locais, facilitamos o acesso à educação e saúde...
                        </p>
                    </div>
                </div>

                {/* Impacto Ambiental (Quinta seção - Ordem normal) */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <Image
                            src="/imgEnergy/image5.jpg"
                            alt="Impacto ambiental positivo da energia solar"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h2 className="text-3xl font-bold text-accent">Impacto Ambiental</h2>
                        <p className="text-lg text-gray-300">
                            Ao escolher energia solar, contribuímos diretamente para a redução de emissões de carbono e para a conservação do meio ambiente...
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

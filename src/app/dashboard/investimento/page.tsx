"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
// Lista de locais
const locais = [
  { id: "local-1", logradouro: "Rua da Esperança", bairro: "Centro", cidade: "São Paulo", estado: "SP", cep: "01000-000", populacao: 1500 },
  { id: "local-2", logradouro: "Rua das Flores", bairro: "Vila Maria", cidade: "São Paulo", estado: "SP", cep: "02000-000", populacao: 2500 },
  { id: "local-3", logradouro: "Avenida das Palmeiras", bairro: "Jardim Paulista", cidade: "São Paulo", estado: "SP", cep: "03000-000", populacao: 3200 },
  { id: "local-4", logradouro: "Rua São João", bairro: "Vila Progredir", cidade: "São Paulo", estado: "SP", cep: "04000-000", populacao: 1100 },
  { id: "local-5", logradouro: "Rua do Sol", bairro: "Jardim das Acácias", cidade: "São Paulo", estado: "SP", cep: "05000-000", populacao: 2100 },
  { id: "local-6", logradouro: "Travessa da Paz", bairro: "Campo Limpo", cidade: "São Paulo", estado: "SP", cep: "06000-000", populacao: 1800 },
  { id: "local-7", logradouro: "Rua do Vento", bairro: "Jardim Santa Tereza", cidade: "São Paulo", estado: "SP", cep: "07000-000", populacao: 500 },
  { id: "local-8", logradouro: "Rua da Lua", bairro: "Vila Nova", cidade: "São Paulo", estado: "SP", cep: "08000-000", populacao: 750 },
];

// Lista de planos
const tiers = [
  { name: "Plano Essencial", priceMonthly: "R$ 300.000", description: "Uma solução rápida e eficiente para atender comunidades menores.", features: ["Atende até 1.000 pessoas", "Retorno anual de 5%", "Prazo de preparo: 12 meses"] },
  { name: "Plano Expansão", priceMonthly: "R$ 400.000", description: "Um plano balanceado para comunidades médias com maior eficiência.", features: ["Atende até 1.800 pessoas", "Retorno anual de 8%", "Prazo de preparo: 18 meses"] },
  { name: "Plano Avançado", priceMonthly: "R$ 500.000", description: "Ideal para comunidades pequenas que desejam acesso básico à energia solar.", features: ["Atende até 1.500 pessoas", "Retorno anual de 10%", "Prazo de preparo: 24 meses"] },
  { name: "Plano Premium", priceMonthly: "R$ 750.000", description: "Perfeito para expandir o alcance e impacto em comunidades maiores.", features: ["Atende até 2.000 pessoas", "Retorno anual de 15%", "Prazo de preparo: 36 meses"] },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Compra() {
  const [selectedLocal, setSelectedLocal] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [etapa, setEtapa] = useState("welcome"); // "welcome", "local", "plano", "sucesso"
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  // Handle para exibir a tela de boas-vindas
  const handleInvestir = () => {
    setShowWelcomeScreen(false);
    setEtapa("local");
  };

  const handleConhecerMais = () => {
    alert("Redirecionando para mais informações sobre o projeto.");
    // Redirecionar para mais detalhes
  };

  // Handle de mudança de etapa após confirmação do local
  const confirmarLocal = () => {
    if (selectedLocal) {
      setEtapa("plano");
    } else {
      alert("Por favor, selecione um local.");
    }
  };

  // Handle para finalizar compra
  const finalizarCompra = () => {
    if (selectedPlan) {
      setEtapa("sucesso");
    } else {
      alert("Por favor, selecione um plano.");
    }
  };

  // Resetar tudo e voltar para a tela inicial
  const reiniciarCompra = () => {
    setSelectedLocal(null);
    setSelectedPlan(null);
    setEtapa("welcome");
    setShowWelcomeScreen(true);
  };

  // Voltar para a escolha de local
  const voltarParaLocal = () => {
    setEtapa("local");
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Tela de Boas-Vindas */}
      {showWelcomeScreen && (
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl font-semibold text-gray-900">Bem-vindo à área de investimento da Mef</p>
          <p className="mt-4 text-xl text-gray-600">
            Deseja investir conosco e ajudar no desenvolvimento de comunidades?
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={handleInvestir}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md text-lg hover:bg-indigo-500"
            >
              Sim
            </button>
            <Link
              href="/solution" // Defina o caminho para a aba /solution
            >
              <button
                className="bg-transparent text-indigo-600 px-6 py-2 rounded-md text-lg border-2 border-indigo-600 hover:bg-indigo-50"
              >
                Conhecer mais sobre o projeto
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Escolha de Local */}
      {etapa === "local" && !showWelcomeScreen && (
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Escolha um local</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:max-w-7xl lg:gap-x-6">
            {locais.map((local) => (
              <div
                key={local.id}
                onClick={() => setSelectedLocal(local.id)}
                className={classNames(
                  selectedLocal === local.id ? "bg-gray-800 text-white" : "bg-white text-gray-800",
                  "rounded-lg p-6 shadow-md cursor-pointer transition duration-300 hover:shadow-lg"
                )}
              >
                <h3 className="text-lg font-semibold">{local.logradouro}</h3>
                <p className="text-sm">{local.bairro}, {local.cidade} - {local.estado}</p>
                <p className="text-sm">População: {local.populacao}</p>
                <button
                  className={classNames(
                    selectedLocal === local.id
                      ? "mt-4 bg-indigo-500 text-white hover:bg-indigo-400"
                      : "mt-4 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "block rounded-md px-4 py-2 text-center text-sm font-semibold"
                  )}
                >
                  Selecionar este local
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={confirmarLocal}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
            >
              Confirmar Local
            </button>
          </div>
        </div>
      )}

      {/* Escolha de Plano */}
      {etapa === "plano" && (
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Escolha um plano</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:max-w-7xl lg:gap-x-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                onClick={() => setSelectedPlan(tier.name)}
                className={classNames(
                  selectedPlan === tier.name ? "bg-gray-800 text-white" : "bg-white text-gray-800",
                  "rounded-lg p-6 shadow-md cursor-pointer transition duration-300 hover:shadow-lg"
                )}
              >
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="text-sm">{tier.description}</p>
                <p className="text-xl font-bold mt-4">{tier.priceMonthly}</p>
                <ul className="mt-4 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-2">
                      <CheckIcon className={classNames(selectedPlan === tier.name ? "text-indigo-400" : "text-indigo-600", "h-5 w-5")} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={classNames(
                    selectedPlan === tier.name
                      ? "bg-indigo-500 text-white hover:bg-indigo-400"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "mt-6 block rounded-md px-4 py-2 text-center text-sm font-semibold"
                  )}
                >
                  Selecionar este plano
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 flex justify-between">
            <button
              onClick={voltarParaLocal}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500"
            >
              Voltar para os Locais
            </button>
            <button
              onClick={finalizarCompra}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}

      {/* Sucesso na Compra */}
      {etapa === "sucesso" && (
        <div className="flex flex-col items-center justify-center w-full h-full text-center">
          <CheckIcon className="h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Compra Realizada com Sucesso!</h2>
          <p className="text-lg mb-6">Obrigado pelo seu investimento em energia solar!</p>
          <button
            onClick={reiniciarCompra}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
          >
            Fazer Novo Investimento
          </button>
        </div>
      )}
    </div>
  );
}

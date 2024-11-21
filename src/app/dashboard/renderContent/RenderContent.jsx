import { useState } from 'react';
import Notifications from '../notificacao/Notifications';
import RecentActivity from '../atividadesRescentes/RecentActivity';
import Investment from '../investimento/investimento'; // Importando o componente de investimento

const RenderContent = ({ activeSection}) => {
  const [error] = useState(null);

  if (error) return <div>{error}</div>;

  const renderContentBasedOnSection = () => {
    switch (activeSection) {
      case 'recentActivity':
        return <RecentActivity />; // Mostra a atividade recente
      case 'notifications':
        return <Notifications />; // Exibe notificações
      case 'investment': // Se a seção for 'investment'
        return <Investment />; // Renderiza a seção de Investimento
      default:
        return null;
    }
  };

  return renderContentBasedOnSection();
};

export default RenderContent;

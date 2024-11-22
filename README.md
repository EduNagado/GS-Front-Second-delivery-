# MEF - Energy4future

**MEF - Energy4future** é uma plataforma inovadora que mapeia locais sem energia elétrica em São Paulo, conectando esses pontos a investidores e empresas de energia locais interessados em implementar projetos de energia limpa. Com essa solução, promovemos um ecossistema colaborativo que transforma a vida de comunidades isoladas e oferece novas oportunidades através da energia sustentável.

A plataforma fornece geolocalização e informações detalhadas sobre o impacto social e ambiental de cada projeto, garantindo transparência e promovendo um desenvolvimento sustentável. Além disso, oferece um canal para investidores e empresas de energia selecionarem áreas estratégicas para instalar usinas de energia solar, contribuindo para a criação de um mercado de energia eficiente e inclusivo.

## Estrutura do Projeto

A estrutura do sistema está organizada da seguinte maneira:

- **src**: Contém a maior parte do código fonte do projeto.
  - **app**: Contém as principais páginas e funcionalidades do site, incluindo:
    - **dashboard**: Página com as funcionalidades do painel principal do sistema.
      - **headerdashboard**: Contém o cabeçalho do painel.
      - **investimento**: Subpágina para gerenciamento de investimentos.
      - **sidebar**: Implementação da barra lateral de navegação.
    - **energy**: Página relacionada aos projetos de energia.
    - **googleLoginButton**: Implementação do botão de login via Google.
    - **home**: Página inicial do sistema.
    - **login**: Página que contém as funcionalidades de login.
    - **solution**: Detalha as soluções oferecidas pela plataforma.
    - **team**: Informações sobre a equipe e parceiros do projeto.
  - **components**: Contém componentes reutilizáveis, como:
    - **Button**: Implementação de botões padrão.
    - **footer**: Rodapé do sistema.
    - **header**: Cabeçalho genérico utilizado em múltiplas páginas.
  - **hooks**: Implementações de hooks personalizados para gerenciamento de estado e lógica específica.
  - **globals.css**: Define a estilização global do sistema.
  - **layout.tsx**: Configuração global, incluindo SEO, fontes e estilos consistentes.
  - **page.tsx**: Arquivo principal para implementação das páginas do sistema.

## Pacotes Instalados

Os pacotes a seguir foram instalados para atender às necessidades do projeto:

- `@heroicons/react`: Pacote de ícones para enriquecer a interface visual do site.
  ```bash
  npm install @heroicons/react

- `react-icons`: Uma biblioteca com diversos ícones para uso geral.
  ```bash
  npm install react-icons

- `framer-motion`: Biblioteca para criar animações fluídas e interativas.
  ```bash
  npm install framer-motion

- `@react-oauth/google`: Ferramenta para integração com autenticação Google OAuth.
  ```bash
 npm install @react-oauth/google

- `jwt-decode`: Utilizado para decodificar tokens JWT.
  ```bash
 npm install jwt-decode

- `react-router-dom`: Biblioteca para gerenciamento de rotas na aplicação.
  ```bash
  npm install react-router-dom

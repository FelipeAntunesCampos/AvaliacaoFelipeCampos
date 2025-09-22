Controle de Vendas
Sistema de Gerenciamento e Análise de Vendas
Este projeto é uma aplicação web completa para gerenciar um controle de vendas. Ele demonstra a implementação de um CRUD (Create, Read, Update, Delete) com funcionalidades de filtragem e navegação por rotas. Os dados são consumidos de um arquivo local, simulando um banco de dados simples para propósitos de demonstração.

Funcionalidades
O sistema foi desenvolvido com as seguintes funcionalidades principais:

CRUD Completo:

Adicionar Venda: Permite incluir novos registros de vendas.

Visualizar Vendas: Exibe a lista completa de todas as vendas cadastradas.

Editar Venda: Possibilita a modificação de dados de uma venda existente.

Excluir Venda: Remove um registro de venda.

Filtragem de Dados: Permite filtrar a lista de vendas por diferentes critérios, como produto, vendedor ou cliente, facilitando a busca e a análise dos dados.

Rotas (Routing): Gerencia a navegação entre as diferentes seções da aplicação de forma organizada e limpa.

Tecnologias Utilizadas

Backend: [Node.js, Express, etc. - opcional, dependendo do seu projeto]

Dados: O arquivo dados.js é usado como fonte de dados mock, simulando um banco de dados.

Como Executar o Projeto
Siga os passos abaixo para rodar a aplicação em sua máquina local:

Clone o repositório:

Bash

git clone (https://github.com/FelipeAntunesCampos/AvaliacaoFelipeCampos)]
Navegue até o diretório do projeto:

Bash

cd [nome-do-diretorio]
Instale as dependências:

Bash

npm install
ou

Bash

yarn
Inicie a aplicação:

Bash

npm start
ou

Bash

yarn start
A aplicação estará disponível em http://localhost:[PORTA_DA_APLICACAO].

Estrutura do Projeto
A estrutura de pastas do projeto segue uma organização modular, facilitando a manutenção e a escalabilidade:

/
├── src/
│   ├── controllers/
│   │   └── vendasController.js  # Lógica de negócio e manipulação dos dados
│   ├── models/
│   │   └── dados.js             # Onde os dados da aplicação são armazenados
│   └── routes/
│       └── vendasRoutes.js      # Rotas da API para as operações CRUD
├── .gitignore
├── server.js 
├── package.json
└── README.md
Autor
Nome: Felipe Antunes Campos

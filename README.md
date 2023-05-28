# Genesis Bank - Teste Frontend - Mini Ecommerce - Mobile

![Genesis Bank Logo](https://media.licdn.com/dms/image/C4D0BAQEEdKNQzQgDAg/company-logo_200_200/0/1588246345601?e=1693440000&v=beta&t=JoOtzuzWTRURWaly4vPYhye8csHpZiTEQtIIF-M0ZlU)

Este projeto é parte do processo seletivo para a vaga de desenvolvedor frontend na Genesis Bank. O objetivo deste projeto é implementar um mini ecommerce utilizando React Native, com funcionalidades de criação, listagem/filtro e compra de produtos. O projeto também conta com um servidor Fastify que se conecta ao MongoDB para fornecer a base de dados para a aplicação.

## Tecnologias Utilizadas

- React Native
- Expo Router
- MongoDB
- Styled Components
- Zod

## Pré-requisitos

- Docker e Docker Compose
- Node.js
- Expo CLI (`npm install -g expo-cli`).

## Como rodar o projeto

### Passo 1: Clonar o repositório

Clone o repositório em sua máquina utilizando o comando:

```bash
git clone https://github.com/thunderjr/genesis-bank-test-mobile
```

### Passo 2: Navegar até o diretório do projeto

Depois de clonar o repositório, navegue até o diretório do projeto usando o comando:

```bash
cd genesis-bank-test-mobile
```

### Passo 3: Iniciar a aplicação com Docker Compose

A base de dados MongoDB e o servidor serão iniciados utilizando o Docker Compose. Para fazer isso, execute o seguinte comando:

```bash
docker-compose up -d
```

Este comando irá iniciar o cluster MongoDB e o servidor Fastify em segundo plano.

### Passo 4: Instalar as dependências e iniciar a aplicação

Instale as dependências do projeto e inicie a aplicação utilizando os comandos:

```bash
npm install
npm run start
```

### Passo 5: Executar o aplicativo em seu dispositivo/emulador

Agora, você deve ver o Expo Developer Tools no navegador. A partir daqui, você pode executar o aplicativo em um dispositivo ou em um emulador.

## Feedback

Caso você tenha algum feedback ou dúvida, por favor, entre em contato através de [flavio.marques01@etec.sp.gov.br](mailto:flavio.marques01@etec.sp.gov.br).

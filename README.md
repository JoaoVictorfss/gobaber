<p align="center">
<img src="https://github.com/JoaoVictorfss/gobaber/blob/master/gobarber-web/src/assets/logo-purple.svg" width=35%>
</p>

<h1 align="center"> GoBarber </h1>

<p align="center">
   <img src="http://img.shields.io/static/v1?label=issues&message=0&color=yellow&style=plastic"/>
  <img src="http://img.shields.io/static/v1?label=last%20commit&message=july&color=information&style=plastic"/>
  <img src="http://img.shields.io/static/v1?label=license&message=MIT&color=green&style=plastic"/>
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=node&message=interpretador&color=green&style=for-the-badge&logo=Node.js"/>
  <img src="http://img.shields.io/static/v1?label=status&message=em%20desenvolvimento&color=GREEN&style=plastic"/>
</p>

> Status do Projeto: Em desenvolvimento :warning:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto-star)

:small_blue_diamond: [Funcionalidades](#funcionalidades-checkered_flag)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Tecnologias e dependências](#tecnologias-e-dependências)

:small_blue_diamond: [Executando a aplicação](#executando-a-aplicação-arrow_forward)

## Descrição do Projeto :star:
<p align="justify">O Gobaber é um sistema completo(Mobile, Front-end e Back-end) de gerenciamento de serviços de beleza em que 
sua versão front-end é para prestadores de serviço enquanto que a versão mobile é para clientes.</p>

## Funcionalidades :checkered_flag:

### Front-end :sparkling_heart:
- [X] Criação de acesso para prestadores de serviço
- [X] Acesso e autenticação de prestadores de serviço já existentes
- [X] Atualização de dados do prestador de serviços, isso inclui foto, email, nome...
- [X] Listagem dos agendamentos(por data) e notificações 
- [X] Log out da aplicação

### Mobile :sparkling_heart:
- [X] Criação de acesso para clientes
- [X] Acesso e autenticação de clientes já existentes
- [X] Atualização de dados de clientes, isso inclui foto, email, nome...
- [X] Criação e cancelamento de agendamentos de serviços com prestadores de serviço
- [X] Log out da aplicação

### Node :muscle:
- [X] Possibilita todas as funcionalidades do mobile e front-end
- [X] Envio de e-mail para o prestador de serviço assim que um agendamento é cancelado 


## Pré-requisitos
#### Ferramentas: 
- Yarn
- Docker
#### Serviços:     
- Postgres
- Redis
- Mongodb

## Tecnologias e dependências
  ### Front-end
  - React: Biblioteca para construir interfaces de usuário
  - Redux: Gerenciamento de estado (inclui Saga e Persist)
  - Axios: Requisições HTTP
  - CSS: styled-components
  - Lint: ESlint/Prettier/Editor Config
  
  ### Back-end
   - sentry/node
   - bcryptjs
   - bee-queue
   - cors
   - crypto
   - date-fns
   - dotenv
   - express
   - express-async-errors
   - express-handlebars
   - jsonwebtoken
   - mongoose
   - multer
   - nodemailer
   - nodemailer-express-handlebars
   - pg
   - pg-hstore
   - sequelize
   - youch
   - yup
   
  ### Mobile
   - ...


## Executando a aplicação :arrow_forward:
 ##### No terminal, clone o projeto:
   > git clone https://https://github.com/JoaoVictorfss/gobaber.git
  
 ##### Entre na pasta do projeto:
   > cd gobaber

 ##### Em cada pasta separada do projeto (gobarber-mobile, gobarber-back-end e gobarber-web), instale as dependências:
   > yarn 
  
 ## No Back-end:
   > Entre na pasta gobarber-back-end
   
 #### Configurando as variáveis de ambiente

 1. Insira as informações no arquvio '.env' conforme explicado a seguir
 
 2. Preencha a url em que sua aplicação vai rodar e qual o modo
        
        APP_URL=
        NODE_ENV=
  
 3. Insira uma string única para servir de base para a autenticação

        #Auth
        
        APP_SECRET=
       
 4. É necessário ter uma instância de banco de dados postgres rodando e a partir dela criar uma base de dados com um nome qualquer, adicionando então, estes dados ao arquivo de configuração

    ex: $ docker run --name gobarber-postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres
        
        
        #Database
      
         DB_HOST=
         DB_USER=
         DB_PASS=
         DB_NAME=
         

  5. Devemos instânciar também o redis e o mongodb, e alterar os dados no arquivo .env

      ex: $ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

      ex: $ docker run --name gobarber-mongo r -p 27017:27017 -d -t mongo


          MONGO_URL=mongodb://localhost:27017/gobarber
          REDIS_HOST=127.0.0.1
          REDIS_PORT=6379
          

   6. Para simular o envio de emails, foi utilizado o serviço mailtrap.io. Crie uma conta e coloque os dados fornecidos nas linhas abaixo do arquivo .env
    
         
          MAIL_HOST=
          MAIL_PORT=
          MAIL_USER=
          MAIL_PASS=
          
        
  #### Iniciando o back-end

  Executamos as migrations para criar as tabelas no banco de dados
   > yarn sequelize db:migrate
 
  Rodamos a aplicação da api
  > yarn dev

  Rodamos a aplicação da fila
  > yarn queue

  ## No Front-end:
  > Acesse o diretório 
  > cd gobarber-web

  #### Pré-requisitos:
      Back-end da aplicação executando.

  #### Vá no terminal e execute a aplicação:
  > yarn start
  
  ## No Mobile:
  ...

  
  ## Licença 
  The [MIT License]() (MIT)

  Copyright :copyright: 2020 - gobarber

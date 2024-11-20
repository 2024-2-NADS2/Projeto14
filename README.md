# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# EcoRota

## Integrantes: <a href="https://www.linkedin.com/in/brosselindev/">João Pedro Brosselin</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/">Victor Rosetti</a>, <a href="https://www.linkedin.com/in/aimarlopes/">Aimar Lopes</a>, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino</a>, <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>, <a href="https://www.linkedin.com/in/jbuesso/">José Carlos Buesso Jr.</a>

## Descrição

<p align="center">
<img src="/imagens/LogoEcoRota.jpg" alt="EcoRota" border="0">
  EcoRota by <a href="https://www.linkedin.com/in/brosselindev/">João Pedro Brosselin</a> & <a href="https://www.linkedin.com/in/ceciliafornazieri/">Cecília Lopes Fiel Fornazieri (Design)</a>
  <br/>Link Site Oficial : <a href="https://ecorota.vercel.app/">EcoRota</a>
</p>




<br><br>
EcoRota é uma ferramenta que localiza pontos de coleta de lixo reciclável próximos de você, e icentiva o descarte consciente "Gameficando" a ação de reciclar, gerando relatórios e mantendo organizado sua rotina de reciclagem.
<br><br>
<a href="https://www.figma.com/design/JpOzlRC5TNmHsA06MsBqTh/Guia-de-Estilo-EcoRota?node-id=0-1&t=poM80aiHHT1DNJTq-1">GUIA-DE-ESTILO-FIGMA</a>
<br><br>
<a href="https://www.figma.com/slides/bNscHZkmSKz469HFcPsqxg/Design-System?node-id=1-4&t=jka6MEZ0ssdt68Io-1">DESIGN SYSTEM</a>
## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->Entrega 1 e 2<br>
  &emsp;|-->Entrega 3<br>
  &emsp;|-->antigos 4<br>
|-->imagens<br>
|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;|-->Frontend<br>
|readme.md<br>

<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre o projeto. O mesmo que você está lendo agora.

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.
## 🖥️ Requisitos do sistema 
- ``HTML``
- ``CSS``
- ``JavaScript``
- ``React``
- ``Node.js``
- ``Postgres``


## 🖥️ Ferramentas de Desenvolvimento
- 🛠 Instalação do React

  • Instale o Node.js a partir do site oficial: [Node.js](https://nodejs.org/).

  • No terminal, execute o comando para criar um novo projetoReact:

```sh
npx create-react-app ecorota
````

  • Entre no diretório do projeto:
```sh
cd ecorota
````

- 🖥️ Instale as dependências do projeto:
```sh

npm install instalará todas bibliotecas suficientes quando se usado o package.json do projeto.
````


- ⚙ Configuração do Projeto

• Inicie o servidor de desenvolvimento com o comando:
```sh
npm start
````
• O projeto será aberto na seguinte URL: http://localhost:3001.

## ⛏️ Configuração Backend NodeJs - gcloud
<br/>O Backend é basedo em Node.js usando o pacote Express para utilizar de restApis
<br/>Clone o repositório do gitHub e utilizando o package.json do projeto apenas rode o comando npm install
<br/>O projeto utiliza do banco de dados Postgres e sua extensão Postgis para queries baseadas em geolocalização.
<br/>Feito deploy do backend no Google Cloud Run pelo repositório e banco de dados Postgres também foi migrado para uma instancia cloud do Google
<br/>Frontend utilizando também de apis do google como GoogleMaps JavaScriptApi e Geocoding.

- Pacotes:
```sh
jsonwebtoken: criação de tokens de autenticação para paginas de perfil e login.
express: criação e utilização de restApis.
bcrypt: pacote de salt e criptografia de senhas para manter integridade do banco de dados.
pg: biblioteca para lidar com queries com o Postgres.
cors: liberar utilização de dados providos de outra origem.
dotenv: para armazenar variáveis de ambiente.
nodemon: utilizado para lidar com o servidor Node em desenvolvimento.

````
- Declarando os pacotes:
```sh
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const pool = require('./config/db')
const authRoutes = require('./routes/AuthRoutes')
const ecoPontoRoutes = require('./routes/EcoPontoRoutes')
const materialDataRoutes = require('./routes/MaterialDataRoutes')
PORT = process.env.PORT
app.use(cors())
app.use(express.json())


````

- Declarando rotas:
```sh
//Rotas de Login Cadastro e Autenticação
app.use('/auth', authRoutes)

//Rotas de manipulação dos EcoPontos para  vizualicação no mapa e cadastro de novos pontos
app.use('/ecoponto', ecoPontoRoutes)

//Rotas de manipulação dos dados de coleta, registrar coleta, apagar e demonstrar dados de coleta 
app.use('/materiais', materialDataRoutes)

````

## PS: Ainda em desenvolvimento contínuo
<br/>Novos pontos de coleta ainda estão sendo cadastrados.
<br/>Site ainda não está responsivo podendo causar divergências na estilização dependendo do dispositivo
<br/>Ainda não há informações sobre coletas baseadas em mẽs, ou periôdo porém está em desenvolvimento


## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2024-2-NADS2/Projeto14">EcoRota</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2024-2-NADS2/Projeto14">João Pedro Brosselin</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

## 🎓 Referências

<br/> <a href="https://developers.google.com/maps/documentation/geocoding/overview" >GeoCoding API by GoogleCloud </a>
<br/> <a href="https://developers.google.com/maps/documentation/javascript/overview" >Maps JavaScript API  by GoogleCloud </a>
<br/> <a href="https://abree.org.br/" > Abree </a>
<br/> <a href="https://www.reciclasampa.com.br/" > ReciclaSampa </a>
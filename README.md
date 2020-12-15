# Algoritmos fundamentais em javascript

Esse projeto tem como objetivo programar os algoritmos utilizando javascript e node.js usando comunicação com firebase e heroku. 

## Para executar o projeto é necessario usar:
- Express (É feito para otimizar a construção de aplicações web e API's)
- Bodyparser (capaz de converter o body da requisição para vários formatos)
- ejs (conseguir enviar dados para nossas páginas ejs pelo express)
- path (nativo no node.js)
- Nodemon (atualizar automaticamente o servidor ao salvar o arquivo)

## Para começar o desenvolviemnto do projeto é indispensável clonar o projeto do github para seu diretório:
Mas antes, vamos instalar o [git](http://git-scm.com/download/win)

```
cd "diretorio"
git clone https://github.com/SkDudu/atv-ambiente-desen-software

```
## Instalando dependencias:
É necessario criar um arquivo package.json:
```
$ npm init
```

Para instalar o express, executar os comandos a seguir:
```
$ npm install express --save
```

Para instalar o bodyparser, execute o comando a seguir:
```
$ npm install body-parser
```

Para instalar o ejs, execute o comando a seguir:
```
$ npm install ejs
```

## Objetivo do projeto:
Esse projeto visa iniciar no desenvolvimento de web sites, host de server na sua maquina com ferramentas voltadas para o mercado de trabalho e usando o firebse como autenticação e heroku no hosting do site.

## Server
Para instalar o nodemon, execute o comando a seguir:
```
$ npm install -g nodemon
```
Adicione esse script no arquivo package.json na parte de scripts:
```
"start": "nodemon app.js"
```
Para rodar o servidor do nodemon, escreva no termial:
```
$ npm start
```

### Contribuições são sempre bem-vindas! Para contribuir lembre-se de adicionar testes com novas classes e com a documentação.

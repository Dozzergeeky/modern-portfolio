---
title: "Alloy UI 2.0"
description: "Lembro quando estava fazendo a entrevista para entrar na Liferay e Eduardo disse: 'Zeno, quero que o Alloy tenha a tua cara', eu lembro bem dessa frase porque foi uma das coisas que me fez entrar na empresa. Me demitir da Globo não seria fácil, mas eu tinha a oportunidade de transformar um produto usado por mais de 350.000 pessoas no mundo através do Liferay Portal em uma coisa ainda mais legal."
image: /static/img/posts/reintroducing-alloy.jpg
slug: alloyui-2
skip: true
lang: pt-BR
date: "2013-02-07"
---

_[Read in English.](http://www.liferay.com/web/eduardo.lundgren/blog/-/blogs/reintroducing-alloyui-or-meet-alloy-2-0-)_

Lembro quando estava fazendo a entrevista para entrar na Liferay e Eduardo disse: *"Zeno, quero que o Alloy tenha a tua cara"*, eu lembro bem dessa frase porque foi uma das coisas que me fez entrar na empresa.

Me demitir da Globo não seria fácil, mas eu tinha a oportunidade de transformar um produto usado por mais de 350.000 pessoas no mundo através do [Liferay Portal](http://www.liferay.com/products/liferay-portal/overview) em uma coisa ainda mais legal.

Depois de muito trabalho, fizemos o lançamento do preview release nessa segunda-feira, desde então já tivemos mais de 30.000 pageviews em só 3 dias e isso é só o começo amigo.

<!-- more -->

## O que é?

Antes de contar o que foi feito, vamos primeiro contextualizar quem ainda não conhece esse negócio.

O AlloyUI é um framework open source de componentes de interface que nasceu em 2009 depois de um trabalho conjunto de Nate Cavanaugh, Eduardo Lundgren e o time da Yahoo!

Por anos o Alloy foi usado e conhecido como o framework JavaScript por trás do Liferay Portal. Isso foi muito bom, porque ajudou o projeto a crescer bastante, mas ao mesmo tempo restringiu a determinada audiência.

Nós agora queremos mudar a abordagem, queremos que o projeto seja reconhecido como um framework JavaScript poderoso e usado por projetos muito legais, incluindo o Liferay Portal.

Isso pode parecer uma mudança pequena, mas não é. Nós não estamos apenas fazendo o release de uma nova versão, nós estamos repensando toda nossa engenharia, comunicação e aproximação da comunidade como um projeto open source.

## Quais são as novidades?

### Novo site

Primeiro, nós fizemos um [site completamente novo](http://alloyui.com/) \o/

É sexy e tem vários novos exemplos/tutoriais. Nós decidimos preservar o [API Docs](http://alloyui.com/api/) e [Rosetta Stone](http://alloyui.com/rosetta-stone/) porque eles continuam boas fontes de conhecimento.

O site foi criado usando um gerador estático em NodeJS e toda documentação está escrita em Markdown.

Se você quiser ajudar a melhorar o site, por favor consulte o [código fonte no Github](https://github.com/liferay/alloyui.com) (e [lembre de usar GIFs](https://github.com/liferay/alloyui.com/pull/86) :P).

### Look &amp; Feel

O Alloy foi construído por engenheiros, mas engenheiros não são focados em design, certo? Por isso decidimos utilizar o look & feel do [Twitter Bootstrap](http://twitter.github.com/bootstrap/), o projeto mais popular no Github hoje em dia.

### Comunicação

Adicionamos mais canais de comunicação, então agora você pode nos encontar no [Liferay Forums](http://www.liferay.com/community/forums/-/message_boards/category/8409523), [Google Groups](https://groups.google.com/forum/?fromgroups#!forum/alloyui) e [Stack Overflow](http://stackoverflow.com/questions/tagged/alloy-ui).

### Build mais rápido

Nós usamos [Ant](http://ant.apache.org/) por um bom tempo, mas o tempo passa e novas build tools vão surgindo. Então nós estamos substituindo para o [Shifter](https://github.com/yui/shifter) e [Yogi](https://github.com/liferay/yogi-alloy), dois projetos irados feitos pelos nossos amigos na Yahoo!

### CDN

AlloyUI agora está hospedado em uma CDN muito rápida, então agora você pode usar facilmente adicionando essa url `http://cdn.alloyui.com/2.0.0pr1/aui/aui-min.js` na sua tag `<script>`.

### Download mais rápido

A última versão do repositório do Alloy tinha quase 800mb, agora para baixar o Alloy 2.0 são menos de 10mb!

### Menos Componentes

A última versão do AlloyUI tinha 73 componentes, para esse primeiro release temos só 20 componentes.

## Por que usar o Alloy?

Muita gente pergunta por que deveriam investir seu tempo no Alloy? Ou por que não usar o jQuery com seu gigantesco ecossistema de plugins?

O lance é o seguinte, manipulação de DOM é só o topo do iceberg quando estamos lidando com aplicações modernas e de alta escalabilidade. Você provavelmente vai utilizar uma biblioteca para templates (como Mustache/Handlebars), outra para carregamento modular (como RequireJS/HeadJS), outra para estruturação MVC (como Backbone/Ember), outra para componentes de UI (como jQueryUI/KendoUI) e por aí vai.

Bom, o Alloy vem com todas essas coisas juntas. Então não tem confusão entre bibliotecas, só uma API uniforme que deixa sua vida mais fácil. É construído com base no YUI3, um projeto da Yahoo! e é mantido pelos engenheiros da Liferay.

Enfim, nós não viemos para competir com o jQuery, só queremos continuar ajudando a comunidade JavaScript e em especial aqueles que trabalham com aplicações enterprise de grande escala.

## Próximos passos?

Nós vamos continuar adicionando novos componentes, documentando e aprimorando o site. Mas o mais importante, nós queremos ouvir o que vocês acham disso. Então fique à vontade para deixar seu comentário nesse post ou entre em contato através do [Liferay Forums](http://www.liferay.com/community/forums/-/message_boards/category/8409523) ou [Google Groups](https://groups.google.com/forum/?fromgroups#!forum/alloyui).

## Quer saber mais?

Dia 19 de fevereiro vou apresentar tudo ao vivo no [AlloyUI LIVE Session](http://www.liferay.com/events/web-events).

## Obrigado :)

Isso não seria possível sem a ajuda Eduardo Lundgren que merece todo o crédito na construção dessa nova versão, além de Nate Cavanaugh e Brian Chan que acreditaram na ideia.

Também Marc Lundgren, Ethan Bustad, Robert Frampton e Patrick Armitage que ajudaram insanamente na criação dos exemplos e tutoriais para o site. E finalmente Bernard De Luna, Briza Bueno, Djalma Araújo e todos meus coworkers do escritório brasileiro pelo apoio.

var canvas = document.getElementById("canvas_animacao");
var context = canvas.getContext("2d");

var b1 = new Bola(context);
b1.x = 100;
b1.y = 200;
b1.velocidadeX = 20;
b1.velocidadeY = -10;
b1.cor = 'red';
b1.raio = 20;

var b2 = new Bola(context);
b2.x = 200;
b2.y = 100;
b2.velocidadeX = -10;
b2.velocidadeY = 20;
b2.cor = 'blue';
b2.raio = 30;

var b3 = new Bola(context);
b3.x = 200;
b3.y = 100;
b3.velocidadeX = -5;
b3.velocidadeY = 15;
b3.cor = 'green';
b3.raio = 30;

var animacao = new Animacao();
animacao.novoSprite(b1);
animacao.novoSprite(b2);
animacao.novoSprite(b3);

animacao.ligar();

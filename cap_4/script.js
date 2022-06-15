var imgSonic = new Image();
imgSonic.src = "img/sonic.png";
imgSonic.onload = function() {
    var linhas = 3;
    var colunas = 8;
    var largura = imgSonic.width / colunas;
    var altura = imgSonic.height / linhas;
    var queroLinha = 2;
    var queroColuna = 7;
    var x = largura * queroColuna;
    var y = altura * queroLinha;

    var canvas =  document.getElementById('canvas1');
    var context = canvas.getContext('2d');
    context.drawImage(
    imgSonic,
    x,
    y,
    largura,
    altura,
    100,
    100,
    largura,
    altura);
}

var canvas2 = document.getElementById('canvas_sonic');
var context = canvas2.getContext('2d');

var teclado =  new Teclado(document);
var animacao = new Animacao(context);
var imgSonic = new Image();
imgSonic.src = "img/sonic.png";
var sonic = new Sonic(context, teclado, imgSonic);
sonic.x = 0;
sonic.y = 200;
animacao.novoSprite(sonic);
imgSonic.onload = function() {
    animacao.ligar();
}
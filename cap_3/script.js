var canvas = document.getElementById("canvas_teclado_1");
var context = canvas.getContext('2d');
context.fillStyle = "lightblue";

/*var posicao = 0;
desenharPersonagem();

document.addEventListener('keydown', function(evento) {
    if (evento.key == 'ArrowLeft') {
        posicao -= 10;
        desenharPersonagem();
    }
    else if (evento.key == 'ArrowRight') {
        posicao += 10;
        desenharPersonagem();
    }
});

function desenharPersonagem() {
    context.clearRect(0, 0, canvas2.clientWidth, canvas2.height);
    context.fillRect(posicao2, posicao3, 20, 50);
}

var canvas2 = document.getElementById('canvas_teclado_2');
var context = canvas2.getContext('2d');

var posicao2 = 0;
var posicao3 = 0;
desenharPersonagem();
var teclado = new Teclado(document);
requestAnimationFrame(animar);
function animar() {
    if (teclado.pressionada(SETA_ESQUERDA)){
        posicao2 -=10;
    }else if (teclado.pressionada(SETA_DIREITA)){
        posicao2 += 10;
    }else if (teclado.pressionada(SETA_CIMA)){
        posicao3 -= 10;
    }else if (teclado.pressionada(SETA_BAIXO)){
        posicao3 += 10;
    }
    desenharPersonagem();
    requestAnimationFrame(animar);
}*/
var teclado = new Teclado(document);
var animacao = new Animacao(context);
var heroi = new Heroi(context, teclado, animacao);
heroi.x=0;
heroi.y=100;
animacao.novoSprite(heroi);
teclado.disparou(ESPACO, function() {
    heroi.atirar();
});

animacao.ligar();

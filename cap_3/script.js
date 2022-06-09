var canvas = document.getElementById("canvas_teclado_1");
var context = canvas.getContext('2d');

var posicao = 0;
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
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    context.fillRect(posicao, 100, 20, 50);
}


var canvas2 = document.getElementById('canvas_teclado_2');
var context = canvas2.getContext('2d');

var posicao2 = 0;
desenharPersonagem();
var teclado = new Teclado(document);

requestAnimationFrame(animar);
function animar() {
    if (teclado.pressionada(SETA_ESQUERDA)){
        posicao -=10;
    }else if (teclado.pressionada(SETA_DIREITA)){
        posicao += 10;
    }
    desenharPersonagem();
    requestAnimationFrame(animar);
}
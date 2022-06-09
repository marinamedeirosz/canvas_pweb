var SETA_ESQUERDA = 'ArrowLeft';
var SETA_DIREITA = 'ArrowRight';

function Teclado(elemento) {
    this.elemento = elemento;
    this.pressionadas = [];
    var teclado = this;
    elemento.addEventListener('keydown', function (evento) {
        teclado.pressionadas[evento.keyCode] = true;
    });
    elemento.addEventListener('keyup', function (evento) {
        teclado.pressionadas[evento.keyCode] = false;
    });
}
Teclado.prototype = {
    pressionada: function (tecla) {
        return this.pressionadas[tecla];
    }
}
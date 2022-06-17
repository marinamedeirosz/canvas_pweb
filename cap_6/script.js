var imgEspaco = new Image();
imgEspaco.src = "img/fundo-espaco.png";

var imgEstrelas = new Image();
imgEstrelas.src = "img/fundo-estrelas.png";

var imgNuvens = new Image();
imgNuvens.src = "img/fundo-nuvens.png";

var carregadas = 0;
var total = 3;

imgEspaco.onload = carregando;
imgEstrelas.onload = carregando;
imgNuvens.onload = carregando;

function carregando(){
    carregadas++;
    if (carregadas == total){
        iniciar();
    }
}
function iniciar(){
    var canvas = document.getElementById('canvas_fundo');
    var context = canvas.getContext('2d');
    
    var fundoEspaco = new Fundo(context, imgEspaco);
    var fundoEstrelas = new Fundo(context, imgEstrelas);
    var fundoNuvens = new Fundo(context, imgNuvens);

    fundoEspaco.velocidade = 3;
    fundoEstrelas.velocidade = 7;
    fundoNuvens.velocidade = 10;

    var animacao = new Animacao(context);
    animacao.novoSprite(fundoEspaco);
    animacao.novoSprite(fundoEstrelas);
    animacao.novoSprite(fundoNuvens);
    animacao.ligar();
}

var canvas2 = document.getElementById('canvas_nave');
var context2 = canvas2.getContext('2d');
var teclado = new Teclado(document);
var animacao = new Animacao(context2);
var imgNave = new Image();
imgNave.src = "img/nave.png";
var nave = new Nave(context2, teclado, imgNave);
animacao.novoSprite(nave);

teclado.disparou(ESPACO, function(){
    nave.atirar();
})

imgNave.onload = function(){
    nave.x = canvas2.width / 2 - imgNave.width / 2;
    nave.y = canvas2.height - imgNave.height;
    nave.velocidade = 5;
    animacao.ligar();
}
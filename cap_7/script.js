var imgEspaco = new Image();
imgEspaco.src = "img/fundo-espaco.png";
imgEspaco.onload = carregando;

var imgEstrelas = new Image();
imgEstrelas.src = "img/fundo-estrelas.png";
imgEstrelas.onload = carregando;

var imgNuvens = new Image();
imgNuvens.src = "img/fundo-nuvens.png";
imgNuvens.onload = carregando;

var imgNave = new Image();
imgNave.src = "img/nave.png";
imgNave.onload = carregando;

var imgOvni = new Image();
imgOvni.src = "img/ovni.png";
imgOvni.onload = carregando;

var canvas = document.getElementById("canvas_inimigos");
var ctx = canvas.getContext("2d");

var teclado = new Teclado(document);
var animacao = new Animacao(ctx);

var fundo1 = new Fundo(ctx, imgEspaco);
fundo1.velocidade = 3;
animacao.novoSprite(fundo1);

var fundo2 = new Fundo(ctx, imgEstrelas);
fundo2.velocidade = 7;
animacao.novoSprite(fundo2);

var fundo3 = new Fundo(ctx, imgNuvens);
fundo3.velocidade = 10;
animacao.novoSprite(fundo3);

var nave = new Nave(ctx, teclado, imgNave);
animacao.novoSprite(nave);

var colisor = new Colisor();
colisor.novoSprite(nave);
animacao.novoProcessamento(colisor);

teclado.disparou(ESPACO, function(){
    nave.atirar();
})

var carregadas = 0;
var total = 5;
function carregando(){
    carregadas++;
    if(carregadas == total){
        iniciar();
    }
}

function iniciar(){
    nave.x = canvas.width / 2 - imgNave.width / 2;
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 5;
    animacao.ligar();

    setInterval(novoOvni, 1000);
}

function novoOvni(){
    var ovni = new Ovni(ctx, imgOvni);
    ovni.velocidade = Math.floor(5+Math.random() * (20 - 5 + 1));
    ovni.x = Math.floor(Math.random() * (canvas.width - imgOvni.width + 1));
    ovni.y = -imgOvni.height;
    animacao.novoSprite(ovni);
    colisor.novoSprite(ovni);
}
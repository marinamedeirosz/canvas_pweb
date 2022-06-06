var canvas = document.getElementById("meu_canvas");
var context = canvas.getContext('2d');

context.fillStyle = "lightblue";
context.fillRect(0,0,meu_canvas.height, meu_canvas.width);
context.fillStyle = "red";
context.fillRect(100,100,100,100);
context.lineWidth = 3;
context.strokeStyle='black';
context.strokeRect(100,100,100,100);

context.beginPath();
context.moveTo(10,10);
context.lineTo(40,10);
context.lineTo(40,40);
context.lineTo(10,40);
context.lineTo(10,7);
context.lineWidth = 5;
context.strokeStyle = "green";
context.stroke();

context.moveTo(75,250);
context.lineTo(150,50);
context.lineTo(225,250);
context.lineTo(50,120);
context.lineTo(250,120);
context.lineTo(75,250);
context.stroke();

context.beginPath();
context.arc(
    500, 
    250, 
    50, 
    90*Math.PI/180,
    270*Math.PI/180,
    false);
context.stroke();

context.beginPath();
context.arc(
    500, 
    500, 
    50, 
    0, 
    2*Math.PI, 
    false);
context.stroke();

var imagem = new Image();
imagem.src = "img/final.jpg"
imagem.onload = function(){
    var x = 10;
    for (var i = 1; i <=5; i++){
        context.drawImage(imagem, x, 300, 60, 60);
        x += 70;
    }
}

var imagem2 = new Image();
imagem2.src='img/explosao.png';
imagem2.onload = function() {
    context.drawImage(
        imagem2,
        80,10,60,65,
        20,500,60,65
    );
}

context.beginPath();
context.fillStyle = "pink";
context.fillRect(350, 10, 50, 50);
context.save();
context.fillStyle = "purple";
context.fillRect(350, 10, 50, 50);
context.restore();
context.fillRect(350, 10, 50, 50);

context.beginPath();
var x = 150;
var y = 500;
var raio = 20;
requestAnimationFrame(mexerBola);

function mexerBola(){
    //context.clearRect(0,0,meu_canvas.width,meu_canvas.height);
    context.beginPath();
    context.arc(x,y,raio,0,Math.PI*2);
    context.fill();
    x+=50;
}

requestAnimationFrame(mexerBola);

function Carro(cor, velMax) {
    this.cor = cor;
    this.velMax = velMax;
    this.velAtu = 0;

    Carro.prototype = {
        acelerar: function(){
            this.velAtu += 10;
        }
    }
    //this.acelerar = function(){
        //this.velAtu += 10; 
    //}
}
var meuCarro = new Carro("azul", 200);
var oponente = new Carro("vermelho", 150);
meuCarro.acelerar();

document.write(meuCarro.cor + ':' + meuCarro.velAtu);
document.write('<br>');
document.write(oponente.cor + ':' + oponente.velAtu);

var meuCarro2 = {
    cor:'preto',
    velocidade:0,
    acelerar: function(){
        this.velocidade+=10;
    }
}


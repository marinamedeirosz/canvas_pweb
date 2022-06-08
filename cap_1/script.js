var canvas1 = document.getElementById("quadrados");
var context = canvas1.getContext('2d');

context.fillStyle = "lightblue";
context.fillRect(0,0,canvas1.height, canvas1.width);
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

var canvas2 = document.getElementById("circulos");
var context2 = canvas2.getContext('2d');
context2.fillStyle = "lightblue";
context2.fillRect(0,0,canvas2.height, canvas2.width);
context2.lineWidth = 5;
context2.strokeStyle = "green";

context2.beginPath();
context2.arc(
    100, 
    100, 
    50, 
    90*Math.PI/180,
    270*Math.PI/180,
    false);
context2.stroke();
context2.beginPath();
context2.arc(
    150, 
    100, 
    50, 
    90*Math.PI/180,
    270*Math.PI/180,
    true);
context2.stroke();

context2.beginPath();
context2.arc(
    200, 
    230, 
    50, 
    0, 
    2*Math.PI, 
    false);
context2.stroke();

var canvas3 = document.getElementById("imagens");
var context3 = canvas3.getContext('2d');
context3.fillStyle = "lightblue";
context3.fillRect(0,0,canvas3.height, canvas3.width);

var imagem = new Image();
imagem.src = "img/final.jpg"
imagem.onload = function(){
    var x = 10;
    for (var i = 1; i <=5; i++){
        context3.drawImage(imagem, x, 50, 40, 40);
        x += 50;
    }
}

var imagem2 = new Image();
imagem2.src='img/explosao.png';
imagem2.onload = function() {
    context3.drawImage(
        imagem2,
        80,10,60,65,
        20,100,60,65
    );
}

context3.beginPath();
context3.fillStyle = "pink";
context3.fillRect(140, 140, 50, 50);
context3.save();
context3.fillStyle = "purple";
context3.fillRect(150, 150, 50, 50);
context3.restore();
context3.fillRect(160, 160, 50, 50);

var canvas4 = document.getElementById("animacao");
var context4 = canvas4.getContext('2d');
context4.fillStyle = "lightblue";
context4.fillRect(0,0,canvas4.height, canvas4.width);
context4.fillStyle = "pink";

var x = 20;
var y = 150;
var raio = 15;
var anterior = new Date().getTime();

requestAnimationFrame(mexerBola);

function mexerBola() {
    var agora = new Date().getTime();
    
    var decorrido = agora - anterior;      

    context4.clearRect(0, 0, canvas4.width, canvas4.height);
    context4.fillStyle = "lightblue";
    context4.fillRect(0,0,canvas4.height, canvas4.width);
    context4.fillStyle = "red";
    
    context4.beginPath();
    context4.arc(x, y, raio, 0, Math.PI*2);
    context4.fill();

    var velocidade = 20;
    x += velocidade * decorrido / 1000;
    
    anterior = agora;

    requestAnimationFrame(mexerBola);
}      
   
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


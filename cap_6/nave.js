function Nave(context, teclado, img){
    this.context = context;
    this.teclado = teclado;
    this.img = img;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
}
Nave.prototype = {
    atualizar: function(){
        if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0){
            this.x -= this.velocidade;
        }
        if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - this.img.width){
            this.x += this.velocidade;
        }
        if (this.teclado.pressionada(SETA_CIMA) && this.y > 0){
            this.y -= this.velocidade;
        }
        if (this.teclado.pressionada(SETA_BAIXO) && this.y < this.context.canvas.height - this.img.height){
            this.y += this.velocidade;
        }
    },
    desenhar: function(){
        this.context.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
    },
    atirar: function(){
        var t = new Tiro(this.context, this);
        this.animacao.novoSprite(t);
    }
}
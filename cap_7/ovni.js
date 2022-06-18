function Ovni(context, img){
    this.context = context;
    this.img = img;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
}
Ovni.prototype = {
    atualizar: function(){
        this.y += this.velocidade;
        if(this.y > this.context.canvas.height){
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
        }
    },
    desenhar: function(){
        var ctx = this.context;
        var img = this.img;
        ctx.drawImage(img, this.x, this.y, img.width, img.height);
    },
    retangulosColisao: function(){
        var rets = [
            {x: this.x + 20, y: this.y + 1, largura: 25, altura: 10},
            {x: this.x + 2, y: this.y + 11, largura: 60, altura: 12},
            {x: this.x + 20, y: this.y + 23, largura: 25, altura: 7}
        ];
        return rets;
    },
    colidiuCom: function(outro){
        if(outro instanceof Tiro){
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
            this.animacao.excluirSprite(outro);
            this.colisor.excluirSprite(outro);
        }
    }
}
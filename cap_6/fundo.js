function Fundo(context, img) {
    this.context = context;
    this.img = img;
    this.velocidade = 0;
    this.posicaoEmenda = 0;
}

Fundo.prototype = {
    atualizar: function() {
        this.posicaoEmenda += this.velocidade;
        if (this.posicaoEmenda > this.img.height) {
            this.posicaoEmenda = 0;
        }
    },
    desenhar: function() {
        var img = this.img;
        var posicaoY = this.posicaoEmenda - img.height;
        this.context.drawImage(img, 0, posicaoY, img.width, img.height);
        
        posicaoY = this.posicaoEmenda;
        this.context.drawImage(img, 0, posicaoY, img.width, img.height);
    }
}
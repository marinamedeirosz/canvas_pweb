function SpriteSheet(context, img, linhas, colunas){
    this.context = context;
    this.img = img;
    this.numlinhas = linhas;
    this.numcolunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;
}
SpriteSheet.prototype = {
    proximoQuadro: function(){
        var agr = new Date().getTime();
        if (!this.ultimoTempo){
            this.ultimoTempo = agr;
        }
        if (agr - this.ultimoTempo < this.intervalo){
            return;
        }
        if (this.coluna < this.numcolunas - 1) {
            this.coluna++;
        } else {
            this.coluna = 0;
        }
        this.ultimoTempo = agr;
    },
    desenhar: function(x, y){
        var largura = this.img.width / this.numcolunas;
        var altura = this.img.height / this.numlinhas;
        this.context.drawImage(
            this.img,
            largura * this.coluna,
            altura * this.linha,
            largura,
            altura,
            x,
            y,
            largura,
            altura
        );
    }
}
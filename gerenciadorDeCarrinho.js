const GerenciadorDeCarrinho = {
    itens: [],
    adicionarItem: function(produto) {
        this.itens.push(produto);
    },
    obterCarrinho: function() {
        return this.itens;
    }
};

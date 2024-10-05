const GerenciadorDeHistorico = {
    mensagens: [],
    salvarMensagem: function(mensagem) {
        this.mensagens.push(mensagem);
    },
    obterHistorico: function() {
        return this.mensagens;
    }
};

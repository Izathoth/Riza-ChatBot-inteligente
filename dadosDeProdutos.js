const DadosDeProdutos = {
    produtos: [
        { nome: "Fones de ouvido sem fio a partir de:", preco: 30 },
        { nome: "Celulares a partir de:", preco: 700 },
        { nome: "Teclados a partir de:", preco: 400 },
        { nome: "Mouses gamers a partir de:", preco: 150 },
        { nome: "Headsets com microfone a partir de:", preco: 200 },
        { nome: "Cadeiras gamers a partir de:", preco: 800 },
        { nome: "Monitores 144Hz a partir de:", preco: 1200 },
        { nome: "Mouse pads grandes a partir de:", preco: 50 },
        { nome: "Placas de vídeo a partir de:", preco: 1500 },
        { nome: "Gabinetes gamers a partir de:", preco: 300 },
        { nome: "Controladores de console a partir de:", preco: 250 },
        { nome: "Webcams HD a partir de:", preco: 150 },
        { nome: "Microfones USB a partir de:", preco: 100 },
        { nome: "Discos rígidos externos a partir de:", preco: 300 },
        { nome: "SSD a partir de:", preco: 400 },
        { nome: "Coolers para PC a partir de:", preco: 100 },
        { nome: "Fones de ouvido com fio a partir de:", preco: 80 },
        { nome: "Roupas gamer a partir de:", preco: 50 },
        { nome: "Alto-falantes Bluetooth a partir de:", preco: 200 },
        { nome: "Luzes LED para setup a partir de:", preco: 70 },
        { nome: "Controladores de movimento a partir de:", preco: 300 },
        { nome: "Rato pad RGB a partir de:", preco: 120 },
        { nome: "Estabilizador para microfone a partir de:", preco: 150 },
        { nome: "Suporte para fones de ouvido a partir de:", preco: 60 },
        { nome: "Painéis acústicos a partir de:", preco: 200 },
        { nome: "Capa para teclado a partir de:", preco: 30 },
        { nome: "Desktops gamers a partir de:", preco: 2500 },
        { nome: "Ventoinhas RGB a partir de:", preco: 50 },
        { nome: "Suporte para monitor a partir de:", preco: 150 },
        { nome: "Teclados mecânicos a partir de:", preco: 600 },
        { nome: "Mouse gamers sem fio a partir de:", preco: 200 },
        { nome: "Placas mãe a partir de:", preco: 600 },
        { nome: "Câmeras de segurança para streaming a partir de:", preco: 200 },
        { nome: "Adaptadores de áudio a partir de:", preco: 80 }
    ],
    obterProdutos: function() {
        let tabelaProdutos = "<table><tr><th>Produto</th><th>Preço</th></tr>";
        this.produtos.forEach(produto => {
            tabelaProdutos += `<tr><td>${produto.nome}</td><td>R$ ${produto.preco}</td></tr>`;
        });
        tabelaProdutos += "</table>";
        document.getElementById("product-table").innerHTML = tabelaProdutos;
        document.getElementById("product-table").style.display = "block";
    },
    obterInstrucoesDeCompra: function() {
        return "Para comprar um produto, escolha um item da lista e siga as instruções na tela.";
    }
};
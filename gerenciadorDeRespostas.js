const GerenciadorDeRespostas = {
    respostas: [
        { 
            id: 1, 
            frase: "oi",
            resposta: "Olá! 😊 Como posso ajudar você hoje? Se estiver interessado em nossos produtos, ou se precisar de assistência, estou aqui para ajudar!" 
        },
        { 
            id: 2, 
            frase: "produtos", 
            resposta: "Temos uma ampla variedade de produtos disponíveis! 🎉 Você gostaria de saber mais sobre algum tipo específico, como eletrônicos, roupas ou acessórios? Clique no botao: Mostrar produtos." 
        },
        { 
            id: 3, 
            frase: "como comprar", 
            resposta: "Comprar conosco é fácil! 🛒 Basta navegar pelos produtos, escolher o que deseja e adicionar ao carrinho. Depois, siga para o checkout e finalize sua compra com um dos métodos de pagamento disponíveis. Se precisar de instruções detalhadas, estou aqui para ajudar!" 
        },
        { 
            id: 4, 
            frase: "contato", 
            resposta: "Você pode nos contatar pelo WhatsApp: +55 99 8427-1816. 📱 Se preferir, também pode acessar nossa assistência online em seila.com. Estamos prontos para atender suas dúvidas!" 
        },
        { 
            id: 5, 
            frase: "promoções", 
            resposta: "Temos várias promoções incríveis acontecendo agora! 🎊 Acesse a seção de promoções no nosso site para ver todas as ofertas disponíveis. Além disso, você pode se inscrever na nossa newsletter para receber promoções exclusivas!" 
        },
        { 
            id: 6, 
            frase: "horário de funcionamento", 
            resposta: "Estamos sempre aqui para você! ⏰ Nossas operações são 24 horas por dia, 7 dias por semana. Você pode fazer pedidos a qualquer momento!" 
        },
        { 
            id: 7, 
            frase: "formas de pagamento", 
            resposta: "Oferecemos diversas formas de pagamento para sua conveniência! 💳 Aceitamos cartões de crédito, débito e pagamentos via transferência bancária. Se tiver dúvidas sobre como realizar o pagamento, estou aqui para ajudar!" 
        },
        { 
            id: 8, 
            frase: "entrega", 
            resposta: "Realizamos entregas em todo o Brasil! 🚚 O prazo de entrega varia de acordo com a sua localização, mas geralmente leva de 3 a 10 dias úteis. Você pode acompanhar o status da entrega pelo seu pedido em nosso site." 
        },
        { 
            id: 9, 
            frase: "devolução", 
            resposta: "Você pode devolver um produto em até 30 dias após a compra. 📦 Para facilitar o processo, consulte nossa política de devolução no site. Estamos aqui para garantir que você fique satisfeito com sua compra!" 
        },
        { 
            id: 10, 
            frase: "ajuda", 
            resposta: "Claro! Estou aqui para ajudar. 💡 Sobre o que você precisa de ajuda? Se é sobre produtos, compras, ou outro assunto, basta perguntar!" 
        },
        { 
            id: 11, 
            frase: "quero cancelar", 
            resposta: "Entendemos que imprevistos acontecem. 🛑 Para cancelar seu pedido, entre em contato conosco pelo WhatsApp. Estaremos prontos para ajudar você com o processo!" 
        },
        { 
            id: 12, 
            frase: "status do meu pedido", 
            resposta: "Você pode acompanhar o status do seu pedido pelo nosso site. 📦 Basta acessar a seção de acompanhamento de pedidos e inserir seu número de pedido. Se precisar de ajuda, estamos aqui!" 
        },
        { 
            id: 13, 
            frase: "novidades", 
            resposta: "Fique por dentro das novidades! 🆕 Confira a seção de lançamentos em nosso site para ver os novos produtos que acabaram de chegar. Você também pode se inscrever para receber atualizações!" 
        },
        { 
            id: 14, 
            frase: "atendimento", 
            resposta: "Nosso suporte está disponível de segunda a sexta-feira, das 9h às 18h. 🕘 Se você precisar de assistência fora desse horário, não hesite em deixar sua mensagem, e retornaremos assim que possível!" 
        },
        { 
            id: 15, 
            frase: "sugestões", 
            resposta: "Adoramos receber feedback! 💌 Você pode enviar suas sugestões pelo nosso site ou WhatsApp. Suas ideias são importantes para nós e ajudam a melhorar nossos serviços!" 
        },
        { 
            id: 16, 
            frase: "mais informações", 
            resposta: "Para mais informações, por favor, visite nosso site. 🌐 Você encontrará detalhes sobre nossos produtos, serviços, e muito mais. Se precisar de ajuda específica, estou aqui!" 
        },
        { 
            id: 17, 
            frase: "cartão de fidelidade", 
            resposta: "Você pode se inscrever no nosso programa de fidelidade e acumular pontos a cada compra! ⭐ Os pontos podem ser trocados por descontos em compras futuras. Confira mais detalhes no nosso site!" 
        },
        { 
            id: 18, 
            frase: "parcelamento", 
            resposta: "Sim, aceitamos parcelamento em até 12 vezes sem juros no cartão de crédito! 💳 Isso facilita muito suas compras. Se precisar de mais informações, entre em contato!" 
        },
        { 
            id: 19, 
            frase: "fora de estoque", 
            resposta: "Se um produto estiver fora de estoque, você pode deixar seu e-mail para ser notificado quando ele voltar. 🔔 Assim, você será o primeiro a saber quando o item estiver disponível novamente!" 
        },
        { 
            id: 20, 
            frase: "cupom", 
            resposta: "Os cupons podem ser aplicados no checkout. 🎫 Confira nossos cupons disponíveis no site e aproveite descontos especiais nas suas compras!" 
        },
        { 
            id: 21, 
            frase: "reclamações", 
            resposta: "Pedimos desculpas pelo inconveniente. 😟 Por favor, entre em contato com nosso suporte para resolver sua reclamação. Estamos aqui para garantir a sua satisfação!" 
        },
        { 
            id: 22, 
            frase: "fidelidade", 
            resposta: "Nossos clientes fiéis recebem promoções exclusivas e acesso antecipado a novos produtos! 🎁 É nossa maneira de agradecer pelo seu apoio." 
        },
        { 
            id: 23, 
            frase: "garantia", 
            resposta: "A garantia é válida por 1 ano. 🛠️ Consulte nossa política de garantia no site para mais detalhes e para saber como proceder em caso de problemas com o produto." 
        },
    ],
    
    obterResposta: function(mensagem) {
        // Convertendo a mensagem para minúsculas para melhor correspondência
        mensagem = mensagem.toLowerCase();

        // Verificando respostas exatas
        for (const resposta of this.respostas) {
            if (mensagem.includes(resposta.frase)) {
                return resposta.resposta;
            }
        }

        // Caso não encontre resposta exata, usa Fuse.js para encontrar a mais semelhante
        const fuse = new Fuse(this.respostas, {
            keys: ["frase"],
            includeScore: true,
            threshold: 0.3 // Definindo a sensibilidade da busca
        });

        const resultado = fuse.search(mensagem);

        if (resultado.length > 0) {
            // Retorna a resposta mais semelhante
            return `Desculpe, não entendi sua pergunta. Você quis dizer: "${resultado[0].item.frase}"? ${resultado[0].item.resposta}`;
        } else {
            return "Desculpe, não entendi sua pergunta. Você pode perguntar sobre produtos, como comprar ou promoções. Tente reformular sua pergunta para que eu possa ajudar melhor.";
        }
    }
};
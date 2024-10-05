document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();
    
    if (userMessage !== "") {
        addMessage("Você: " + userMessage);
        GerenciadorDeHistorico.salvarMensagem("Você: " + userMessage);
        userInput.value = "";
        exibirDigitação("Riza I.A está digitando");
        setTimeout(() => {
            obterRespostaDoBot(userMessage);
        }, 2000);
    }
});

// Novo botão para limpar mensagens com confirmação
document.getElementById("clear-button").addEventListener("click", function() {
    if (confirm("Tem certeza que deseja limpar o histórico de mensagens?")) {
        clearMessages();
    }
});

// Função para limpar mensagens
function clearMessages() {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = ""; // Limpa o conteúdo da div de mensagens
}

// Função para salvar o histórico de mensagens em um arquivo
document.getElementById("save-history-button").addEventListener("click", function() {
    salvarHistorico();
});

function salvarHistorico() {
    const historico = GerenciadorDeHistorico.obterHistorico(); // Presumindo que este método existe
    const blob = new Blob([historico], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'historico.txt'; // Nome do arquivo a ser salvo
    link.click();
}

function addMessage(message) {
    const messagesDiv = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function exibirDigitação(message) {
    const messagesDiv = document.getElementById("messages");
    const typingElement = document.createElement("div");
    typingElement.className = "typing-animation";
    typingElement.textContent = message + " ";
    
    const dots = document.createElement("span");
    dots.textContent = ".";
    typingElement.appendChild(dots);
    
    messagesDiv.appendChild(typingElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    let dotCount = 0;
    const dotInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = ".".repeat(dotCount);
    }, 500);

    setTimeout(() => {
        clearInterval(dotInterval);
        messagesDiv.removeChild(typingElement);
    }, 2000);
}

function obterRespostaDoBot(userMessage) {
    const mensagemLimpa = LimpadorDeEntrada.limpar(userMessage);
    const resposta = GerenciadorDeRespostas.obterResposta(mensagemLimpa);
    adicionarRespostaComAnimacao("Riza: " + resposta);
}

function adicionarRespostaComAnimacao(resposta) {
    const messagesDiv = document.getElementById("messages");
    const respostaElement = document.createElement("div");
    messagesDiv.appendChild(respostaElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    let index = 0;
    const typingInterval = setInterval(() => {
        respostaElement.textContent += resposta.charAt(index);
        index++;
        if (index >= resposta.length) {
            clearInterval(typingInterval);
        }
    }, 50);
}

// Novas funcionalidades a seguir

// Novo sistema de busca de mensagens
document.getElementById("search-button").addEventListener("click", function() {
    const searchTerm = document.getElementById("search-input").value.trim();
    buscarMensagens(searchTerm);
});

function buscarMensagens(searchTerm) {
    const messagesDiv = document.getElementById("messages");
    const allMessages = messagesDiv.children;

    for (let message of allMessages) {
        if (message.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            message.style.display = "block"; // Exibe mensagem se contiver o termo de busca
        } else {
            message.style.display = "none"; // Oculta mensagem caso contrário
        }
    }
}

// Novo filtro de mensagens por categoria
document.getElementById("filter-button").addEventListener("click", function() {
    const selectedCategory = document.querySelector('input[name="filter-category"]:checked').value; // Obtém a categoria filtrada
    filtrarMensagensPorCategoria(selectedCategory);
});

function filtrarMensagensPorCategoria(selectedCategory) {
    const messagesDiv = document.getElementById("messages");
    const allMessages = messagesDiv.children;

    for (let message of allMessages) {
        if (message.textContent.includes(selectedCategory) || selectedCategory === "todas") {
            message.style.display = "block"; // Exibe mensagem se corresponder à categoria ou se todas estiverem selecionadas
        } else {
            message.style.display = "none"; // Oculta mensagem caso contrário
        }
    }
}
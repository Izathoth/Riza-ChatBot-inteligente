window.onload = function() {
    const audio = new Audio('audio.mp3');
    audio.play().catch(function(error) {
        console.error('Erro ao tentar tocar o áudio:', error);
    });
};
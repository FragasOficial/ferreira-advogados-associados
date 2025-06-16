document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const status = document.getElementById('mensagem-status');
    status.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    status.style.color = "#bfa048";
    
    // Resetar formulário (simulação)
    this.reset();
});

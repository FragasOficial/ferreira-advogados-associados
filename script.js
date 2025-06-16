document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('mensagem-status');
    status.textContent = "Sua mensagem foi enviada! Retornaremos em breve.";
    status.style.color = "#bfa048";
    this.reset();
});

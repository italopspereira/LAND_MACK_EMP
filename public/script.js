document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    // Captura os dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        interest: document.getElementById('interest').value
    };

    // Envia os dados para o backend
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Exibe uma mensagem de sucesso
        const resultMessage = document.getElementById('result-message');
        resultMessage.textContent = data.message;
        resultMessage.style.color = 'green';
    })
    .catch(error => {
        console.error('Erro:', error);
        // Exibe uma mensagem de erro
        const resultMessage = document.getElementById('result-message');
        resultMessage.textContent = 'Ocorreu um erro ao enviar os dados.';
        resultMessage.style.color = 'red';
    });
});

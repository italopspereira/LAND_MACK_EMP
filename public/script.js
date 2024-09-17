document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const resultMessage = document.getElementById('result-message');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch('/', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          window.location.href = '/thanks.html'; // Redireciona para a página de agradecimento
        } else {
          resultMessage.textContent = 'Ocorreu um erro ao enviar os dados.';
          resultMessage.style.color = 'red';
        }
      })
      .catch(error => {
        resultMessage.textContent = 'Ocorreu um erro ao enviar os dados.';
        resultMessage.style.color = 'red';
        console.error('Erro:', error);
      });
    });
  });
  
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Middleware para lidar com JSON
app.use(express.json());
app.use(express.static('public')); // Serve arquivos estáticos, incluindo seu HTML e CSS

// Rota para salvar os dados do formulário
app.post('/submit-form', (req, res) => {
    const { name, email, phone, interest } = req.body;

    // Validação básica
    if (!name || !email || !interest) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos obrigatórios.' });
    }

    // Dados formatados para salvar
    const data = `Nome: ${name}, Email: ${email}, Telefone: ${phone || 'N/A'}, Interesse: ${interest}\n`;

    // Salvando os dados no arquivo leads.txt
    fs.appendFile('leads.txt', data, (err) => {
        if (err) {
            console.error('Erro ao salvar os dados:', err);
            return res.status(500).json({ message: 'Erro ao salvar os dados.' });
        }
        console.log('Dados salvos com sucesso!');
        res.json({ message: 'Dados enviados com sucesso!' });
    });
});

// Rota para o formulário inicial (opcional caso seu HTML esteja em /public)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Defina a porta para o Heroku ou localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

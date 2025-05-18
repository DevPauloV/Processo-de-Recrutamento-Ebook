// server.js
import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookplay_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL conectado!');
});


app.get('/', (req, res) => {
    res.send('Servidor backend está funcionando!');
});



app.post('/register', async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;
    const hash = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err) => {
        if (err) return res.status(400).json({
            error: 'Erro no cadastro'
        });
        res.status(201).json({
            message: 'Usuário registrado!'
        });
    });
});


app.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({
            error: 'Erro no servidor'
        });
        if (results.length === 0) return res.status(400).json({
            error: 'Usuário não encontrado'
        });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({
            error: 'Senha incorreta'
        });


        res.status(200).json({
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    });
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
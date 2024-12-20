import express from 'express';
import { PORT } from './config.js';

const app = express();

app.get('/', (req,res) => {
    res.send('hola mundo!!!');
});

app.get('/login', (req,res) => {})
app.get('/register', (req,res) => {})
app.get('/logout', (req,res) => {})
app.get('/protected', (req,res) => {})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
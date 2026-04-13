import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from './routes/Avaliacaoroute.js';
const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categoria', categoriaRoutes);
app.use('/avaliacoes', avaliacaoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

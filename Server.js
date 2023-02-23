const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
    res.send(
    `
    <h1 id="kalimat">Selamat datang di Server Kelompok 6</h1>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/blog">Blog</a>
    
    <p>Ini adalah halaman utama</p>

    `
    );
    
});
app.get('/about', (req, res) => {
    res.send(`
        <h1>ini adalah halaman about</h1>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>ini adalah halaman contact</h1>
    
    `);

});

app.get('/blog', (req, res) => {
    res.send(`
        <h1>ini adalah halaman blog</h1>
    `);
});


app.listen(8888, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
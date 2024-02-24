const express = require('express')
const app = express()
const port = 3001
var cors = require('cors');

const getImagem = require("../database/personagens");
const getNome = require("../database/nome");

app.use(cors());

app.get('/getImagem', (req, res) => {
    getImagem()
    .then(jsonData => {
      const rows = JSON.parse(jsonData);
      res.send(rows);
    })
    .catch(err => {
      console.error('Error:', err);
    });
})

app.get('/adivinhar', (req, res) => {
  getNome(req.query.id)
  .then(jsonData => {
    const rows = JSON.parse(jsonData);
    if(rows[0].nome === req.query.tentativa){
      res.sendStatus(200);
    }
    else{
      res.sendStatus(404);
    }
  })
  .catch(err => {
    console.error('Error:', err);
  });
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})

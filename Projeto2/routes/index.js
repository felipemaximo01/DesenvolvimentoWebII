const express = require('express');

//rotas
const router = express.Router();

router.get('/', (req, res) => { 
    let obj = {
        nome: req.query.nome,
        idade: req.query.idade,
        mostrar: true,
        disciplinas: [
            {nome:'Materia1', qt: '20 Aulas'},
            {nome:'Materia2', qt: '30 Aulas'}
        ],
        frutas: ['banana', 'maça', 'melancia'],
        teste: '<strong>Testando Negrito</strong>'
    };
    res.render('home', obj)
});

module.exports = router;
const express = require('express');
const router = express.Router();


// Recuperando todos itens
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota produtos'
    })
});

// Postando um item
router.post('/', (req, res, next) => {

    const produto = { // criando objeto produto
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota produtos',
        produtoCriado: produto
    })
})

// Produto especifico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    let msg = 'Usando get para produto especifico'
    if (id == 'especial'){
        msg = 'Mensagem especial descoberta'
    }

    res.status(200).send({
        mensagem: msg,
        id: id
    })
})

// Altera produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota produtos'
    })
})

// Deleta produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota produtos'
    })
})

module.exports = router;
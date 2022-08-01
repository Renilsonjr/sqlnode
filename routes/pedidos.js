const express = require('express');
const router = express.Router();


// Recuperando todos itens
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota pedidos'
    })
});

// Postando um item
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota pedidos'
    })
})

// pedido especifico
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    let msg = 'Usando get para pedido especifico'
    if (id == 'especial'){
        msg = 'Mensagem especial descoberta'
    }

    res.status(200).send({
        mensagem: msg,
        id: id
    })
})

// Altera pedido
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido alterado'
    })
})

// Deleta Pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido deletado'
    })
})

module.exports = router;
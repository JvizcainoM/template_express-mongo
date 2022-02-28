const express = require('express');
const router = express.Router();
const {getItem, getItems, addItem, updateItem, deleteItem} = require('../controllers/users');

router.get('/:id', getItem);

router.get('/', getItems);

router.post('/', addItem);

router.patch('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
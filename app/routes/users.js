const express = require('express');
const router = express.Router();
const { validateToken } = require('../middleware/userValidation');
const { getItem, getItems, addItem, updateItem, deleteItem } = require('../controllers/users');

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', addItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
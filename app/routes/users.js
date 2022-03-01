const express = require('express');
const router = express.Router();
const { validateToken } = require('../middleware/userValidation');
const { getItem, getItems, addItem, updateItem, deleteItem } = require('../controllers/users');

router.get('/', validateToken, getItems);

router.get('/:id', validateToken, getItem);

router.post('/', validateToken, addItem);

router.patch('/:id', validateToken, updateItem);

router.delete('/:id', validateToken, deleteItem);

module.exports = router;
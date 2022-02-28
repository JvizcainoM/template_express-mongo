const { httpError } = require('../helpers/handleError');
const userModel = requre ('../models/users');


const getItem = (req, res) => {
    res.send({ item: 1 });
}

const getItems = (req, res) => {
    res.send({ list: [1, 2, 3] });
}
const addItem = async (req, res) => {
    try {
        const resDetail = await userModel.create(req.body);
    }
    catch (err) {
        httpError(res, err);
    }
}
const updateItem = (req, res) => {
}
const deleteItem = (req, res) => {
}

module.exports = { getItem, getItems, addItem, updateItem, deleteItem }
const { httpError } = require('../helpers/handleError');
const userModel = require('../models/users');


const getItem = (req, res) => {
    res.send({ item: 1 });
}

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({});
        res.send({ data: listAll });
    }
    catch (err) {
        httpError(res, err);
    }
}
const addItem = async (req, res) => {
    try {
        const resDetail = await userModel.create(req.body);
        res.send({ data: resDetail });
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
const { default: mongoose } = require('mongoose');
const { httpError } = require('../helpers/handleError');
const userModel = require('../models/users');

const parseId = (id) => mongoose.Types.ObjectId(id);

const getItem = async (req, res) => {    
    const { id } = req.params;
    try {
        const item = await userModel.find({ _id: parseId(id) });
        res.send({ data: item });
    }
    catch (err) {
        httpError(res, err);
    }
}

const getItems = async (req, res) => {
    try {
        const allItems = await userModel.find({});
        res.send({ data: allItems });
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
    const { id } = req.params;
    const { body } = req;

    userModel.updateOne(
        { _id: parseId(id) },
        body, // Values to update
        (err, docs) => {
            if (err)
                httpError(res, err);
            else
                res.send({ data: docs });
        });
}

const deleteItem = (req, res) => {
    const { id } = req.params;
    userModel.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            if (err)
                httpError(res, err);
            else
                res.send({ data: docs });
        });
}

module.exports = { getItem, getItems, addItem, updateItem, deleteItem }
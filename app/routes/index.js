const express = require('express');
const router = express.Router();
const fs = require('fs');
const { modelName } = require('../models/users');

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(pathRouter).filter(file => {
    const fileNameWithoutExtension = removeExtension(file);
    const skip = ['index'].includes(fileNameWithoutExtension);

    if (!skip) {
        router.use(`/${fileNameWithoutExtension}`, require(`./${fileNameWithoutExtension}`));
        console.log('Load route ---->', fileNameWithoutExtension);
    }
});
router.get('*', (req, res) => {
    res.status(404).json({
        message: 'Not found'
    });
});
module.exports = router;
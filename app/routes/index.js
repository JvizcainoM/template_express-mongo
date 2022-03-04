const router = require('express').Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(pathRouter).filter(file => {
    const fileNameWithoutExtension = removeExtension(file);
    const skip = ['index'].includes(fileNameWithoutExtension);

    if (!skip) {
        router.use(`/${fileNameWithoutExtension}`, require(`./${fileNameWithoutExtension}`));
        console.log('Loaded route ---->', fileNameWithoutExtension);
    }
});

router.get('/', (req, res) => {
    res.sendFile('login.html', { root: './public' });
});

router.get('*', (req, res) => {
    res.status(404).json({
        message: 'Not found',
    });
});
module.exports = router;
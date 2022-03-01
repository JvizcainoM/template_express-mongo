const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.headers.authorization.split(' ').pop() || req.query.access_token;

    if (!accessToken) {
        return res.status(401).send({
            message: 'Access token is missing.'
        });
    }

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Access denied. Invalid or expired token.'
            });
        }

        req.userId = decoded.id;
        next();
    });
}

module.exports = { validateToken };
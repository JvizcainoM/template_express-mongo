const { onDisconnect, onConnect, onMessage } = require('../app/controllers/socket');

function initSocket(io) {

    io.on('connection', (socket) => {
        
        console.log(`${socket.id} connected`);
        socket.on('disconnect', onDisconnect(socket));
    });
}

module.exports = { initSocket };
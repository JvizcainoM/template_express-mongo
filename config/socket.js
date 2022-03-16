const { onDisconnect, onConnect } = require('../app/controllers/socket');

function socketConnection(io) {

    io.on('connection', (socket) => {
        onConnect(socket);

        socket.on('disconnect', onDisconnect(socket));
    });
    
    console.log('] Loaded +> socket.io');
}

module.exports = { socketConnection };
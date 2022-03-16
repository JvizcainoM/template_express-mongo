function onConnect(socket) {
    console.log(`${socket.id} connected`);
}

function onDisconnect(socket) {
    return () => {
        console.log(`${socket.id} disconnected`);
    }
}

module.exports = { onConnect, onDisconnect };
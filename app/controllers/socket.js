
function onDisconnect(socket) {
    return () => {
        console.log(`${socket.id} disconnected`);
    }
}

module.exports = { onDisconnect };
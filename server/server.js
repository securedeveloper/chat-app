const server = require('http').createServer();
const socketIo = require('socket.io')(server);

const PORT = process.env.PORT || 3100;

const ChatHandler = require('./handlers');

const {
    broadcastMessage,
    addUser,
    removeUser
} = ChatHandler();

socketIo.on('connection', function (client) {
    console.log('A new client is connected...', client.id);

    addUser(client);

    client.on('message', function (message) {
        console.log(client.id, message);

        broadcastMessage(message);
    });

    client.on('disconnect', function () {
        console.log('A new client is disconnected...', client.id);
        removeUser(client)
    });

    client.on('error', function (err) {
        console.log('received error from client:', client.id);
        console.log(err)
    })
});

server.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`listening on port ${PORT}`);
});

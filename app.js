var io = require('socket.io').listen(8080, '192.168.1.21');

io.sockets.on('connection', function (socket) {
	socket.emit('news', { msg: 'hello world' });
	socket.on('click', function (data) {
		socket.broadcast.emit('response', data);
	});
});

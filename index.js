const io = require('socket.io')(3000); //same port for the client to connect, e.g. 3000
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM6');

const parser = port.pipe(new Readline({delimiter: '\r\n'}));

io.on('connection', function(socket){

    // setInterval(function(){
    // socket.emit("arduino", '' + Math.random() * 100);
    //
    // }, 500)
    parser.on('data', function(data)
    {
        data = (data + '').replace('Reading: ', '').replace(' lbs', '');

        socket.emit("arduino", data);
    });
});
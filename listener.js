const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM6');

const parser = port.pipe(new Readline({delimiter: '\r\n'}));
parser.on('data', console.log);



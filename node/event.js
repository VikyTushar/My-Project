var events = require('events');
var eventEmitter = new events.EventEmitter();

//event Handler
var myEventHandler = function(){
    console.log('I hear a scream');
}

//assign eventHandler

eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event

eventEmitter.emit('scream');
 
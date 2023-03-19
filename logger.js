// const EventEmitter = require('events');

var url='http//myblogger.io/log'; 

// class Logger extends EventEmitter{

   
//      log() {
        
    
//         this.emit('login by',{ id:'1', url:'http://jadaj.com'});
//     }
// }

// module.exports = Logger;

const EventEmitter =require('events')

class Abeni extends EventEmitter{
    login(){
        console.log('hello abeni')
        this.emit('abeni',{id:'1', url})
    }
}
module.exports = Abeni;
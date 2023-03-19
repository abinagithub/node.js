var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/playground');
 
var db = mongoose.connection;
 
db.on('error', function() {
  return console.error.bind(console, 'connection error: ');
});
 
db.once('open', function() {
  var User;
  return User = require('./user.js');
});
 
// Validate a user
(function() {
  var User = require('./user.js');
  var me = { username: 'foo' };
  var user = new User(me);
  var err = user.Validate(me);
  if (err) throw err;
  user.save(function(err, saved) {
  });
})();
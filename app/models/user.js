var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',

  initialize: function(model) {
    console.log('John: Inside the new User ', model.password);  
    var saltRounds = 10;
    var plainPassword = model.password;

    this.on('creating', function() {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(plainPassword, salt, null, function (err, hash) {
        //hash is going to be the encrypted password
        });
      });
    });
  }
});

module.exports = User;
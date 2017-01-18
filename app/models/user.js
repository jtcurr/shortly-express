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
          console.log('hash value', hash);
          db.transaction(function(tx) {
            tx.executeSql('INSERT INTO users (username, password) VALUES (?, ?)', [model.username, model.password]);
          });
        });
      });
    });
  }
});

module.exports = User;
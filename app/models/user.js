var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',

  initialize: function(model) {
    console.log('inside the new User ', model);  
    var saltRounds = 10;
    var plainPassword = model.password;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(plainPassword, salt, function (err, hash) {
        
      });
    });
    // handle encription here
    // read www.npmjs.com/package/bcrypt
    this.on('creating', function() {
    });
  }




});

module.exports = User;
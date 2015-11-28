var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userId : {type: String, unique: true},
  email : {type: String, unique: true},
  user_img : String,
  createdAt: Date,
  lastActive: Date
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.lastActive = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('UserSchema',UserSchema);

const passport=require('passport');
const local=require('passport-local');
const user=require('../schema/schema.js')


passport.use({
  username:'email',
  password:'pass'
},function(use,pas,done){
user.findOne({email:use})

})

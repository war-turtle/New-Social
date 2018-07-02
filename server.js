const express=require('express');
const route=require('./routes/route.js')
const mongoose=require('mongoose');
const passport=require('passport');
const google=require('./config/google.js')
const app=express();
const cookie=require('cookie-session');


mongoose.connect('mongodb://uphaar:caped23@ds121461.mlab.com:21461/codeuino',function(){
  console.log('connected');
})

app.set('view engine','ejs');
app.use(express.static('views'));

app.use(cookie({
  maxAge:24*60*60*1000,
  keys:['CAPEDCRUSADER']
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(route)


app.listen(3000,function(){
  console.log('Running');
})
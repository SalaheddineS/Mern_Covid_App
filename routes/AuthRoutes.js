const express=require('express');
const route=express.Router()
const { signIn, welcome, logout } = require("../handlers")


route.route('/signIn').post(signIn)
route.route(`/welcome`).get(welcome)
route.route('/logout').get(logout)




module.exports=route
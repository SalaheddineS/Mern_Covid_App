const express=require('express');
const routes=express.Router()
const{addNewusers,deleteusers,updateusers}=require('../controllers/UsersController');



routes.route('/Addusers').post(addNewusers)
routes.route('/Deleteusers/:idprod').delete(deleteusers)
routes.route('/Updateusers/:idprod').patch(updateusers)

module.exports=routes


const express = require('express');
const router = express.Router();
const db = require('../../config/db');
//import controller
const userController = require('../../modules/users/controllers/UserController');
const logController = require('../../modules/logs/controllers/LogController');

// Users
router.get('/users/list', userController.list );
router.post('/users/findOne', userController.findOne );
router.post('/users/create', userController.create );
router.post('/users/get', userController.get );
router.delete('/users/delete/:id', userController.delete );
router.put('/users/update/:id', userController.update );

// Logs
router.get('/logs/list', logController.list );
router.post('/logs/create', logController.create );
router.post('/logss/get', logController.get );
// router.get('/list', (req,res)=>{
//             db.query("SELECT * FROM customers", (err,result)=>{
//                   if(err) {
//                         console.log(err)
//                   } 
//                         res.send(result)
//             });   
//       });

module.exports = router;
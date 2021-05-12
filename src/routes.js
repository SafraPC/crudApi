const express = require('express');
const { deleteAll } = require('./controllers/user/deleteAll');
const {authController} = require('./controllers/user/registerUser');
const { findAll } = require('./controllers/user/findAll');
const {deleteOne} = require('./controllers/user/deleteOne');
const { findOne } = require('./controllers/user/findOne');
const { updateOne } = require('./controllers/user/updateUser');
const { registerWorkWithUs } = require('./controllers/proposals/registerCV');
const router = express.Router();

//Work With Us
router.put('/work_with_us',registerWorkWithUs);


//User´s Props Routes
router.get('/user',findAll);
router.get('/user/:id',findOne);
router.post('/user/register',authController);
router.put('/user/:id',updateOne);
router.delete('/user',deleteAll);
router.delete('/user/:id',deleteOne)

module.exports = router;
const userServices = require('./users.services')

const router = require('express').Router()

router.get('/users', userServices.getAllusers)
router.post('/users', userServices.postUser)
router.get('/users/:id', userServices.getUserById)
router.patch('/users/:id', userServices.patchUser)
router.put('/users/:id', userServices.putUser)
router.delete('/users/:id', userServices.deleteUser)

module.exports = router
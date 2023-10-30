const { getUserDetails } = require('../controller/userController')

const router = require('express').Router()


router.get('/:id',getUserDetails)

module.exports = router
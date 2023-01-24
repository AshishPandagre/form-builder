const express = require('express')
const { createForm, getForm, getAllForms } = require('./controllers/formController')
const { addResponse, getAllResponses } = require('./controllers/responseController')
const router = express.Router()

router.post('/create-form', createForm)
router.get('/form/:form_id', getForm)
router.post('/response/:form_id', addResponse)

router.get('/get-all-forms', getAllForms)
router.get('/get-all-responses/:form_id', getAllResponses)

module.exports = router

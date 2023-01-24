const Form = require('../models/formModel')
const Response = require('../models/responseModel')

const createForm = async (req, res) => {
  const f = await Form.create(req.body)
  res.json(f)
}

const getForm = async (req, res) => {
  const form_data = await Form.findById(req.params.form_id)
  res.json(form_data)
}

const getAllForms = async (req, res) => {
  const forms = await Form.find({})
  console.log('forms = ', forms);
  res.json(forms)
}

module.exports = {
  createForm,
  getForm,
  getAllForms
}

const Response = require('../models/responseModel')

const addResponse = async (req, res) => {
  const data = await Response.create({
    form: req.params.form_id,
    response: req.body
  })
  console.log(data)
  res.json(data)
}

const getAllResponses = async (req, res) => {
  const responses = await Response.find({ form: req.params.form_id })
  res.json(responses)
}

module.exports = {
  addResponse,
  getAllResponses
}
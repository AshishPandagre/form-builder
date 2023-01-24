import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export const createForm = (data) => api.post('/create-form', data)
export const getForm = (form_id) => api.get(`/form/${form_id}`)
export const addResponse = (form_id, response) => api.post(`/response/${form_id}`, response)
export const getAllForms = () => api.get('/get-all-forms')
export const getAllResponses = (form_id) => api.get(`/get-all-responses/${form_id}`)

export default api

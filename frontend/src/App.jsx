import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import CreateFormPage from './pages/CreateFormPage';
import Forms from './pages/Forms';
import Responses from './pages/Responses';

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/create-form/:type" element={<CreateFormPage />} />
      <Route path="/forms" element={<Forms />} />
      <Route path='/responses/:form_id' element={<Responses />} />
      <Route path="/form/:id" element={<FormPage />} />
      {/* <Route path='/response/:id' element={<Response />} /> */}

    </Routes>
  )
}

export default App

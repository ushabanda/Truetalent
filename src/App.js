import React from 'react'
import Essential from './Essential'
import Jobs from './components/Jobs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Essential /> */}
      <Routes>
      <Route index path="/" element={<Essential />} />
        <Route path="/jobs/search" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

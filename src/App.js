import React from 'react'
import Essential from './Essential'
import Jobs from './components/Jobs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Essential /> */}
      <Routes>
      <Route index path="/" element={<Essential />} />
        <Route path="/jobs/search" element={<Jobs />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Institucional from './Pages/Institucional'
import './Styles/Index.css'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Institucional />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

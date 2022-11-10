import React from 'react'
import Display from './components/Display'
import FormInput from './components/FormInput'
import './App.css'

import { Routes, Route,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<FormInput/>}/>
        <Route  path="/display"  element={<Display/>}/>
      </Routes>
    </BrowserRouter>
  )
}
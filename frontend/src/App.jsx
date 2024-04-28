import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import ShowBooks from './pages/ShowBooks'
import DeleteBook from './pages/DeleteBook'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/details/:id' element={<ShowBooks />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </>
  )
}

export default App

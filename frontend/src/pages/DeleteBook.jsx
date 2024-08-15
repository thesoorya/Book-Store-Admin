import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import LoaderComponent from '../components/Loader'
import BackButton from "../components/BackButton"

const DeleteBook = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  function handleDeleteBook() {
    setLoading(true)
    axios.delete(`https://bookstore-backend-6ggz.onrender.com/${id}`)
      .then(() => {
        setLoading(false)
        navigate("/")
      })
      .catch((error) => {
        setLoading(false)
        alert("An error occurred, please check console")
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {
        loading ? (<LoaderComponent />) : (
          <div className='flex flex-col items-center border-2 border-sky-400 w-[600px] p-8 mx-auto '>
            <h3 className='text-2xl'>Are you sure you want to delete?</h3>
            <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
              Yes, Delete it
            </button>
          </div>
        )
      }
    </div>
  )
}

export default DeleteBook
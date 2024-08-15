import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import LoaderComponent from '../components/Loader'
import BackButton from "../components/BackButton"

const ShowBooks = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`https://bookstore-backend-6ggz.onrender.com/${id}`)
      .then((res) => {
        setBooks(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4">Show Books</h1>
      {
        loading ? (<LoaderComponent />) : (
          <div className='flex flex-col border-2 border-sky-400 w-fit p-4'>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">Id:</span>
              <span>{books._id} </span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-grey-500">Title:</span>
              <span>{books.title} </span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-grey-500">Author:</span>
              <span>{books.author} </span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-grey-500">Publish Year:</span>
              <span>{books.publishYear} </span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-grey-500">Create Time:</span>
              <span>{new Date(books.createdAt).toString()} </span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-grey-500">Create Time:</span>
              <span>{new Date(books.updatedAt).toString()} </span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowBooks
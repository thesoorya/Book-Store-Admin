import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import LoaderComponent from '../components/Loader'
import BackButton from "../components/BackButton"

const CreateBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSaveBook() {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true)
    axios.post("http://localhost:5000/books", data)
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
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading && <LoaderComponent />}
      <div className='flex flex-col border-2 border-sky-400 w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label className='text-xl mr-4 text-grey-500'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-grey-500 px-4 py-2 w-full' />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-grey-500'>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-grey-500 px-4 py-2 w-full' />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-grey-500'>Publish Year</label>
          <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-grey-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-400 m-8' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook
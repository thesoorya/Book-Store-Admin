import React, { useEffect, useState } from 'react'
import axios from "axios"
import LoaderComponent from '../components/Loader' // Renamed Loader to LoaderComponent
import ShowTable from '../components/Home/ShowTable' // Renamed Loader to LoaderComponent
import ShowCard from '../components/Home/ShowCard' // Renamed Loader to LoaderComponent
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from "react-icons/md"

const Home = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false) // Renamed Loader to loading
    const [showType, setShowType] = useState("table")

    useEffect(() => {
        setLoading(true) // Renamed setLoader to setLoading
        axios.get("http://localhost:5000/books")
            .then((res) => {
                setBooks(res.data.data)
                setLoading(false) // Renamed setLoader to setLoading
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className='p-4'>
            <div className="flex justify-center items-center gap-x-4">
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType("table")}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType("card")}>
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {
                loading ? (<LoaderComponent />) : showType === "table" ? (<ShowTable books={books} />) : (<ShowCard books={books} />)
            }
        </div>
    )
}

export default Home
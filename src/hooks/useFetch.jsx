import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [loading,setLoading] = useState(false)
    const [error , setErrror] = useState(false)
    const [data, setData] = useState([])

    const getData = async() =>{
        setLoading(true)
        await axios.get(url)
        .then((response)=>{
            setData(response.data)
            setLoading(false)
        })
        .catch((err)=>{
            setErrror(err.message)
            setLoading(false)
        })
    }
    useEffect(()=>{
        getData()
    },[url])
  return (
    {data,loading,error}
  )
}

export default useFetch
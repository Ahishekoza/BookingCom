import React, { useState } from 'react'
import './Reserve.css'
import useFetch from '../../hooks/useFetch'
import { useCart } from '../../context/dateContext'
const Reserve = ({hoteId}) => {

    const [selectedRooms,setSelectedRooms] = useState([])
    const [traveldate,setTraveldate] = useCart()
    const {data,loading,error}=useFetch(`/hotels/rooms/${hoteId}`)

    const getDatesInRange = (startDate,endDate) =>{
        const start =  new Date(startDate)
        const end = new Date(endDate)

        const date =  new Date(start.getTime())

        const dates=[]
        while(date<=end){
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1);


        }
        return dates
    }


    console.log(getDatesInRange(traveldate[0].startDate, traveldate[0].endDate))

    const handleSelection=(e)=>{
        const checked =  e.target.checked
        const value = e.target.value

        setSelectedRooms(
            checked ? [...selectedRooms,value]
            :
            selectedRooms.filter((item)=> item.id !== value)
        )
    }


  return (
    <div>Reserve</div>
  )
}

export default Reserve
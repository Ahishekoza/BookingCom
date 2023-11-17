import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faTaxi, faPlane, faCar, faCalendar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/dateContext'
// TODO : create a active button Functionality which has 
const Header = ({type}) => {
    const [traveldate,setTravelDate] = useCart()
    const [destination,setDestination] = useState('')
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 0
    })

    const handleOptions = (name, operation) => {
        setOptions((pre) => {
            return {
                ...pre, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })

    }
    const navigation =  useNavigate()
    const handleSearch = () => {
        setTravelDate(date)
        navigation('/hotels',{state:{destination,date,options}})
    }
    return (
        <div className="header">
            <div className={type === 'list' ? "headerContainerWithoutMargin" : "headerContainer"}>
                <div className="headerListContainer">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        Car rentals
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        Attraction
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        Airport taxis
                    </div>
                </div>

                {type === 'list' ?
                    <>
                    </> 
                    :
                    <>
                        <h1 className='headerTitle'>A lifetime of discounts? It`s Genius</h1>
                        <p className="headerDesc">
                            Get rewarded for your travels – unlock instant savings of 10% or
                            more with a free Lamabooking account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcon' icon={faBed} />
                                <input
                                    type='text'
                                    onChange={(e)=> setDestination(e.target.value)}
                                    placeholder='Where are you going?'
                                    className='headerSearchInput'
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcon' icon={faCalendarDays} />
                                <span onClick={() => setOpenDatePicker(!openDatePicker)} className='headerSearchText'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                                {
                                    openDatePicker && <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                }
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adults ${options.children} children ${options.room} room`}</span>
                                {
                                    openOptions && <div className="optionsItem">
                                        <div className="optionListContainer">
                                            <span className="optionName">Adult</span>
                                            <div className="optionQuantity">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    onClick={() => handleOptions('adult', 'd')}
                                                    className="optionCounterButton"
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.adult}
                                                </span>
                                                <button
                                                    onClick={() => handleOptions('adult', 'i')}
                                                    className="optionCounterButton"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionListContainer">
                                            <span className="optionName">Children</span>
                                            <div className="optionQuantity">
                                                <button
                                                    disabled={options.children <= 1}
                                                    onClick={() => handleOptions('children', 'd')}
                                                    className="optionCounterButton"
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.children}
                                                </span>
                                                <button
                                                    onClick={() => handleOptions('children', 'i')}
                                                    className="optionCounterButton"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionListContainer">
                                            <span className="optionName">Room</span>
                                            <div className="optionQuantity">
                                                <button
                                                    disabled={options.room <= 1}
                                                    onClick={() => handleOptions('room', 'd')}
                                                    className="optionCounterButton"
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.room}
                                                </span>
                                                <button
                                                    onClick={() => handleOptions('room', 'i')}
                                                    className="optionCounterButton"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>
                            <div className="headerSearchItem">
                                <button onClick={handleSearch} className='searchBtn'>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default Header
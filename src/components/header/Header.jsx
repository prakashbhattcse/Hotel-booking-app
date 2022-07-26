import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faUser } from '@fortawesome/free-regular-svg-icons';
import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



const Header = ({type}) => {
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

     {/* THINGS TO LEARN */}
     
     const handleOption = (name, operation) => {
         setOptions((prev) => {
             return {
                 ...prev,
                 [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
                };
            });
        };
        
        //  --------------------- THINGS TO LEARN-------------------
        
        const navigate = useNavigate();
    
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
      };




    return (
        <div className='header'>

        {/* THINGS TO LEARN */}

            <div  className={
                  type === "list" ? "headerContainer listMode" : "headerContainer"
            }>
                <div className="headerList">
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
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                {/* THINGS TO LEARN */}

                {type !== "list" && (
                <>
                <h1 className="headerTitle">Spend Quality Holidays With Us</h1>
                <p className="headerDesc">The best hotel deals from all the top hotel sites</p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='Where are you going' className="headerSearchInput" 
                            onChange={(e)=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        
                         {/* THINGS TO LEARN */}

                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faUser} className="headerIcon" />
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} Adult . ${options.children} Children ${options.room} Rooms`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton"
                                    disabled={options.adult<=1}
                                    onClick={()=>handleOption("adult","d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" 
                                    onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton"
                                    disabled={options.children<=0}
                                    onClick={()=>handleOption("children","d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" 
                                     onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton"
                                    disabled={options.room<=1}
                                    onClick={()=>handleOption("room","d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton"
                                     onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">

                    {/* THINGS TO LEARN */}

                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
</>
)}
            </div>
        </div>
    )
}

export default Header
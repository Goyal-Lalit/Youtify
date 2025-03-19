import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faFaceSmile,faHandFist,faHeartCrack, faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
    <div className='main-nav w-full h-20 flex flex-wrap justify-between items-center text-white bg-zinc-800 rounded-md'>
        <div className='logo flex flex-wrap items-center justify-center gap-10 pl-5 bg-zinc-800'>
            <div className='flex items-center gap-2'>
                {/* add app main logo icons */}
                <div>
                    <a href='#'><h1  title='YOUTIFY' className='font-bold text-3xl font-lineto text-teal-600'>M<span className='text-white text-2xl'>OODIFY</span></h1></a>
                </div>
                
               
            </div>
            <div className='search w-[58%] text-teal-600 flex justify-evenly items-center gap-2 py-2 shadow-xl'>
                {/* add one search icon */}
                <div className='search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#008080",}} />
                </div>
                {/* <span>|</span> */}
                <div className='border-none'>
                    <input type="text" placeholder='what do you want to play?' className=' text-white w-50 border-none'/>
                </div>
                
            </div>
        </div>
        <div className='desktop-menu flex flex-wrap items-center gap-5 pr-6 text-teal-600'>
            <select className='text-center pb-0.5 mood'>
                <option value="" selected disabled><a href='#'>Mood</a></option>
                <option value="option1"><a href='#'><FontAwesomeIcon icon={faFaceSmile} style={{color: "#008080",}} /> Happy</a></option>
                <option value="option1"><a href='#'><FontAwesomeIcon icon={faHeartCrack} style={{color: "#008080",}} /> Sad</a></option>
                <option value="option1"><a href='#'><FontAwesomeIcon icon={faHandFist} style={{color: "#008080",}} /> Motivation</a></option>
                <option value="option1"><a href='#'>Romantic</a></option>
            </select>
            <a href='#'>Install App</a>
            <a href='#'>Sign In</a>
            <a href='#'>Log In</a>
        </div> 
        <div className='tablet-menu flex text-teal-600 px-10'>
            <FontAwesomeIcon icon={faBars} style={{color: "#008080",}} />
        </div>   
    </div>
      
    </>
  );
}

export default Navbar;

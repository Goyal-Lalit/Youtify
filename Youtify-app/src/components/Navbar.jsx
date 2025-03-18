import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-full h-20 flex flex-wrap justify-between items-center text-white bg-zinc-800 rounded-md'>
        <div className='flex flex-wrap items-center justify-center gap-10 pl-8 bg-zinc-800'>
            <div className='icon'>
                {/* add app main logo icons */}
                <a href='#'><h1  title='YOUTIFY' className='font-bold text-3xl font-lineto text-teal-600'>M<span className='text-white text-2xl'>OODIFY</span></h1></a>
            </div>
            <div className='search w-70 text-teal-600 flex justify-evenly items-center gap-2 py-2 shadow-xl'>
                {/* add one search icon */}
                <div className='search-icon'>
                    <h2>A</h2>
                </div>
                {/* <span>|</span> */}
                <div className='border-none'>
                    <input type="text" placeholder='what do you want to play?' className=' text-white w-50 border-none'/>
                </div>
                
            </div>
        </div>
        <div className='flex flex-wrap items-center gap-5 pr-6 text-teal-600'>
            <select className='text-center pb-0.5 mood'>
                <option value="" selected disabled><a href='#'>Mood</a></option>
                <option value="option1"><a href='#'>Happy</a></option>
                <option value="option1"><a href='#'>Sad</a></option>
                <option value="option1"><a href='#'>Angry</a></option>
                <option value="option1"><a href='#'>Romantic</a></option>
            </select>
            <a href='#'>Install App</a>
            <a href='#'>Sign In</a>
            <a href='#'>Log In</a>
        </div>    
    </div>
      
    </>
  );
}

export default Navbar;

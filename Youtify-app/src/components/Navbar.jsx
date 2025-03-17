import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-full h-20 border flex flex-wrap justify-between items-center gap-5 text-white'>
        <div className='flex flex-wrap items-center gap-5 pl-5'>
            <div className='icon'>
                {/* add app main logo icons */}
                <a href='#'><h1  title='YOUTIFY' className='font-bold text-2xl font-lineto text-white float'>YOUTIFY</h1></a>
            </div>
            <div className='search'>
                {/* add one search icon */}
                <input type="text" placeholder='what do you want to play?' className=' w-66 text-white border border-white rounded-lg px-8 py-2'/>
            </div>
        </div>
        <div className='flex flex-wrap items-center gap-5 pr-6'>
            <a href='#'>Install App</a>
            <a href='#'>Sign In</a>
            <a href='#'>Log In</a>
        </div>
        
        
    </div>
      
    </>
  );
}

export default Navbar;

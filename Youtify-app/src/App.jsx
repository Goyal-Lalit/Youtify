import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar'; 
import './App.css';
import Library from './components/Library';

function App() {
  return (
    <>
    <div className='main-container bg-zinc-900 h-screen p-2'>
      <div className='navbar bg-zinc-800 mx-2 rounded-md'>
      <Navbar />
      </div>
      <div className='content flex gap-2 mt-2 px-2 '>
        <div className='w-1/6 rounded-md'>
            <Library />
        </div>
        <div className='queue bg-zinc-700 w-5/6 rounded-md px-7 py-5 overflow-scroll' >
            {/* <Library /> */}
        </div>
      </div>
    </div>
    
      
    </>
  );
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar'; 
import './App.css';
import Library from './components/Library';

function App() {
  return (
    <>
    <div className='main-container'>
      <div className='navbar bg-zinc-900'>
      <Navbar />
      </div>
      <div className='content flex gap-2'>
        <div className='library bg-zinc-800 w-1/3'>
            <Library />
        </div>
        <div className='queue bg-zinc-700 w-2/3' >
            <Library />
        </div>
      </div>
    </div>
    
      
    </>
  );
}

export default App;

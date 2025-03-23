import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar'; 
import './App.css';
import Library from './components/Library';
import MusicCard from './components/MusicCard';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <>
    <div className='w-[100%] main-container bg-zinc-900 h-screen p-2'>
      <div className='w-[100%] navbar bg-zinc-800 rounded-md'>
      <Navbar />
      </div>
      <div className='content w-[100%] flex gap-2 mt-2 h-[84%] rounded-md'>
        <div className='w-[12%] rounded-md h-[85.2vh]'>
            <Library />
        </div>
        <div className='queue rounded-md bg-zinc-900 w-[88%] flex flex-col gap-2 h-[85.2vh]' >
          <div className='card-container bg-zinc-800 w-[100%] rounded-md py-5 overflow-scroll h-[95%]'>
              <MusicCard />
          </div>
          <div className='bg-zinc-800 rounded-md h-[10%]'>
              <MusicPlayer />
          </div>
            
        </div>
      </div>
    </div>
    
      
    </>
  );
}

export default App;

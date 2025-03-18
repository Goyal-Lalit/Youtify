import React from 'react'

function Library() {
  return (
    <div className="library h-138 flex flex-col box-border bg-zinc-800 text-white font-lineto rounded-md">
          <div className='h-1/12 flex items-center'>
            <h2 className="text-xl font-bold px-3 py-2">Your Library</h2>
            {/* plus icon */}
          </div>
          <div className='menu  w-full flex flex-col flex-nowrap justify-between gap-10 bg-zinc-800 text-teal-600 pt-10 box-border h-8/12 overflow-scroll'>
                  <div id='main-menu' className='flex flex-col gap-2'>
                      <a href="">Main</a>
                      <a href="">Podcasts</a>
                      <a href="">Radio</a>
                  </div>
                  <div id='my-music' className='flex flex-col gap-2'>
                      <h3 className='text-white'>My Music</h3>
                      <a href="">Tracks</a>
                      <a href="">Albums</a>
                      <a href="">Artists</a>
                      <a href="">Playlists</a>
                  </div>
                  <div id='footer-menu' className='flex flex-col gap-2'>
                      <a href="">Setting</a>
                      <a href="">Log Out</a>
                      
                  </div>
          </div>
          <div className='menu-footer h-3/12 flex flex-col flex-wrap text-[10px] pt-7 pb-2 overflow-scroll'>
              <a href="">Legal</a>
              <a href="">Safety & Privacy Center</a>
              <a href="">Privacy Policy</a>
              <a href="">Cookies</a>
              <a href="">About Ads</a>
              <a href="">Accessibility</a>
          </div>
    </div>
    
  )
}

export default Library

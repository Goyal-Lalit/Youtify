import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMusic,faPodcast,faRadio,faChartGantt,faRecordVinyl,faGuitar,faBarsStaggered,faGear,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

function Library() {
  return (
    <div className="library h-[100%] flex flex-col box-border bg-zinc-800 text-white font-lineto rounded-md">
          <div className='your-lib h-[10%] flex items-center justify-between px-5'>
            <h2 className="text-lg font-bold">Your Library</h2>
            <FontAwesomeIcon className='fa-icon' title='Create Playlist' icon={faPlus} style={{color: "#008080",}} />
            {/* plus icon */}
          </div>
          <div className='menu  w-full flex flex-col flex-nowrap justify-between gap-6 bg-zinc-800 text-teal-600 py-2 box-border h-[90%] rounded-lg overflow-scroll'>
                  <div id='main-menu' className='flex flex-col gap-0.5'>
                  <h3 className='text-white'>All Collection</h3>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faMusic} /> &nbsp;<span>Music</span></a>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faPodcast} style={{color: "#008080",}} /> &nbsp;<span>Podcasts</span></a>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faRadio} style={{color: "#008080",}} /> &nbsp;<span>Radio</span></a>
                  </div>
                  <div id='my-music' className='flex flex-col gap-0.5'>
                      <h3 className='text-white'>My Music</h3>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faChartGantt} style={{color: "#008080",}} /> &nbsp;<span>Tracks</span></a>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faRecordVinyl} style={{color: "#008080",}} /> &nbsp;<span>Albums</span></a>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faGuitar} style={{color: "#008080",}} /> &nbsp;<span>Artists</span></a>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faBarsStaggered} style={{color: "#008080",}} /> &nbsp;<span>Playlists</span></a>
                  </div>
                  <div id='footer-menu' className='flex flex-col gap-0.5'>
                  <h3 className='text-white'>Others</h3>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faGear} style={{color: "#008080",}} /> &nbsp;<span>Setting</span></a>
                      <a href=""><FontAwesomeIcon className='fa-icon' icon={faRightFromBracket} style={{color: "#008080",}} /> &nbsp;<span>Log Out</span></a>
                      
                  </div>
          </div>
    </div>
    
  )
}

export default Library

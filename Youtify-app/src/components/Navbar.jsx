import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFaceSmile, faHandFist, faHeartCrack, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_URL = 'https://v1.nocodeapi.com/jarvis_22211/spotify/FdCEczASPEXmdKsJ/search';

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      try {
        const response = await fetch(`${API_URL}?q=${query}&type=track`);
        const data = await response.json();
        setSearchResults(data.tracks.items || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className='main-nav w-full h-20 flex flex-wrap justify-between items-center text-white bg-zinc-800 rounded-md'>
        <div className='logo flex flex-wrap items-center justify-around gap-5 pl-5 bg-zinc-800'>
          <div className='flex items-center gap-2'>
            <div>
              <a href='#'><h1 title='YOUTIFY' className='font-bold text-3xl font-lineto text-teal-600'>M<span className='text-white text-2xl'>OODIFY</span></h1></a>
            </div>
          </div>
          <div className='search w-[70%] text-teal-600 flex flex-col justify-evenly items-center gap-2 py-2 shadow-xl relative'>
            <div className='search-box w-full flex items-center gap-2 bg-zinc-900 p-2 rounded-md'>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#008080" }} />
              <input 
                type="text" 
                placeholder='What do you want to play?' 
                className='text-white w-full border-none bg-transparent outline-none' 
                value={searchQuery} 
                onChange={(e) => handleSearch(e.target.value)} 
              />
            </div>
            {/* searchResults  */}
            {searchResults.length > 0 && (
              <div className='search-drop absolute top-full w-full bg-zinc-900 text-white mt-2 p-2 rounded-md shadow-lg max-h-60 overflow-y-auto'>
                {searchResults.map((track, index) => (
                  <div key={index} className='p-2 border-b border-zinc-700 flex items-center gap-2'>
                    <img src={track.album.images[0]?.url} alt={track.name} className='w-10 h-10 rounded-md' />
                    <div>{track.name}</div>
                  </div>
                ))}
              </div>
            )}
            {/* searchResults */}
          </div>
        </div>
        <div className='desktop-menu flex flex-wrap items-center gap-5 pr-6 text-teal-600'>
          <select className='text-center pb-0.5 mood'>
            <option value="" selected disabled>Mood</option>
            <option value="happy"><FontAwesomeIcon icon={faFaceSmile} style={{ color: "#008080" }} /> Happy</option>
            <option value="sad"><FontAwesomeIcon icon={faHeartCrack} style={{ color: "#008080" }} /> Sad</option>
            <option value="motivation"><FontAwesomeIcon icon={faHandFist} style={{ color: "#008080" }} /> Motivation</option>
            <option value="romantic">Romantic</option>
          </select>
          <a href='#'>Install App</a>
          <a href='#'>Sign In</a>
          <a href='#'>Log In</a>
        </div>
        <div className='tablet-menu flex text-teal-600 px-10'>
          <FontAwesomeIcon icon={faBars} style={{ color: "#008080" }} />
        </div>
      </div>
    </>
  );
}

export default Navbar;

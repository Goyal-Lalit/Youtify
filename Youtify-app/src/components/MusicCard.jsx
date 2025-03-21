import React, { useEffect, useState } from 'react';

function MusicCard() {
  const [newReleases, setNewReleases] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  
  const API_URL = 'https://v1.nocodeapi.com/jarvis_22211/spotify/FdCEczASPEXmdKsJ';
  
  useEffect(() => {
    fetchData('search?q=raanjhan&type=track', setNewReleases);
    fetchData('search?q=pop&type=track', setRecommendations);
    fetchData('search?q=trending&type=track', setUserTopTracks);
  }, []);

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`);
      const data = await response.json();
      setter(data.tracks.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='music-container flex flex-col overflow-scroll p-4'>
      <Section title='New Releases' tracks={newReleases} />
      <Section title='Recommendations' tracks={recommendations} />
      <Section title="User's Top" tracks={userTopTracks} />
    </div>
  );
}

const Section = ({ title, tracks }) => (
  <div className='Trending mb-6'>
    <h2 className='text-white text-2xl font-bold mb-4'>{title}</h2>
    <div className='trend-card-hold w-full flex gap-8 px-2 py-4 overflow-x-scroll'>
      {tracks.length ? tracks.slice(0, 6).map((track, index) => (
        <div key={index} className='trend-card flex flex-col shrink-0 justify-center items-center'>
          <img src={track.album.images[0]?.url} alt={track.name} className='w-32 h-32 rounded-lg'/>
          <div className='text-white text-sm font-bold'>{track.name}</div>
        </div>
      )) : <p className='text-white'>Loading...</p>}
    </div>
  </div>
);

export default MusicCard;

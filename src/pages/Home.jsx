import React from 'react'
import Playlists from '../components/Playlists'

const Home = () => {
  return (
    <section className="home">
      <div className="home-top">
        <div className="home-top-img" />
        <div className="home-top-title">
          <h2>Featured Playlists</h2>
        </div>
      </div>
      <Playlists />
    </section>
  )
}

export default Home
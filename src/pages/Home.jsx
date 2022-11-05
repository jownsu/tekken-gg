import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <div className="home__main">
                <p className='heading-1 mb-3'>The best fights are personal</p>
                <Link to='buy-now' className='btn-primary'>Buy now</Link>
            </div>
        </div>
  )
}

export default Home
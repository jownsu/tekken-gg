import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
            <div className="home">
                <div className="home__hero">
                    <div>
                        <p className='heading-1 mb-3'>The best fights are personal</p>
                        <Link to='buy-now' className='btn-primary'>Buy now</Link>
                    </div>
                </div>

                <section className="overview">
                    <img src={require('../assets/images/flare-desktop.png')} alt="flare" className='overview__flare' />
                    <div className="container">
                        <div className="overview__main">
                            <div className="overview__season-pass">
                                <div className="overview__info">
                                    <p className="overview__sub-title">Announcements</p>
                                    <p className="overview__main-title">Upcoming season pass 4 update</p>
                                </div>
                            </div>
                            <div className="overview__twitch">
                                <div className="overview__info">
                                    <p className="overview__sub-title">Tekken World Tour 2019</p>
                                    <p className="overview__main-title">Exclusively on twitch</p>
                                </div>
                            </div>
                            <div className="overview__collector">
                                <div className="overview__info">
                                    <p className="overview__sub-title">Limited Edition</p>
                                    <p className="overview__main-title">Collector's edition with statue</p>
                                </div>
                            </div>
                            <div className="overview__updates">
                                <div className="overview__info">
                                    <p className="overview__sub-title">Game Updates</p>
                                    <p className="overview__main-title">PS4®/Xbox One/STEAM® Update data Ver.3.33</p>
                                </div>
                            </div>
                            <div className="overview__funko">
                                <div className="overview__info">
                                    <p className="overview__sub-title">Tekken Collectibles</p>
                                    <p className="overview__main-title">Order tekken funko pop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}

export default Home
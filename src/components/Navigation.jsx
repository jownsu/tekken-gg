import React from 'react'
import { Link } from 'react-router-dom'
import TekkenLogo from '../assets/images/logo.png'

function Navigation() {
    return (
        <nav className='nav'>
            <div className="container">
                <Link to='/'>News</Link> 
                <Link to='/'>Fighters</Link> 
                <Link to='/'>Features</Link> 
                <Link to='/'>Guides</Link> 
                <Link to='/' className='nav__logo'><img src={TekkenLogo} alt="tekken-logo" /></Link> 
                <Link to='/'>Media</Link> 
                <Link to='/'>Esports</Link> 
                <Link className='nav__gold' to='/'>Buy Now</Link> 
                <Link to='/'>Subscribe</Link> 
            </div>
        </nav>
    )
}

export default Navigation
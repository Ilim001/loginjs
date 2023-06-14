import React from "react";
import { Link } from 'react-router-dom'
// import styled from "styled-components"

import './Header.scss'

const Header = () => {
    return (
    <div className="container">
        <div className="box">
                <div className="label">
                    <Link to='/' className="title">Travelix<span>Pro</span></Link>
                </div>

                    <div className="menu">
                        <Link to='/Tours'  className='Link'>Tour’s</Link>
                        <Link to='/srv' className="Link">Services</Link>
                        <Link to='/abus' className="Link">About</Link>
                    </div>
                        
                    <div className="button">
                        <a href="SigUp"><button className="btn">Sig Up</button></a>
                    </div>
        </div>
    </div>
    )
}

export default Header
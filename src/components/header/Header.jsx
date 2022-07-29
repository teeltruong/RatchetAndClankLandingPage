import React from 'react'

import './header.scss'

import { logo } from '../../assets/images'

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">Overview</a></li>
                    <li><a href="https://www.playstation.com/en-vn/games/ratchet-and-clank-rift-apart/">Exploration</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="https://www.playstation.com/en-vn/editorial/this-month-on-playstation/what-to-do-after-youve-finished-ratchet-and-clank-rift-apart/#faqs">FAQs</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header

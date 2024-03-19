import React from 'react';
import './header.scss';
import outlinedown from '../../../assets/icons/outline-down.svg';
import menuIcon from '../../../assets/icons/menu-bar.svg'

export default function Header() {
    return (
        <div className="header bg-light-blue py-5">
            <div className='container flex justify-between items-center'>

                <div className="logo">
                    <h1 className='font-logo text-2xl leading-7 tracking-[-.04em] font-bold cursor-pointer'>superesg</h1>
                </div>

                <div className="menu flex">
                    <a href="Services" className='flex items-center'>
                        <span>Services</span>
                        <img src={outlinedown} alt="DownIcon" />
                    </a>
                    <a href="Industries" className='flex items-center'>
                        <span>Industries</span>
                        <img src={outlinedown} alt="DownIcon" />
                    </a>
                    <a href="Resources">Resources</a>
                    <a href="Pricing">
                        <span>Pricing</span>
                    </a>
                </div>

                <div className='login-button flex'>
                    <div className="button"><button className='button transparent white'>log in</button></div>
                    <div className="button"><button className='button transparent blue'>Get Started</button></div>
                </div>
                <div className="menu-icon">
                    <img src={menuIcon} alt="menuicon" />
                </div>
            </div>
        </div>
    )
}

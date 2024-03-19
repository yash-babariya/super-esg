import React from 'react'
import './getlisted.scss'
import bluerightarrow from '../../../assets/icons/blue-right-arrow.svg'

export default function GetListed() {
    return (
        <div className='getlisted pt-[96px] pb-[100px]'>
            <div className="getlisted-grid container-lg grid grid-cols-[1fr_625px] gap-10">
                <div className="getlisted-grid-items">
                    <h2>Get listed</h2>
                    <div className='get-started flex'>
                        <p>Join for free and list yourself or your company. </p>
                        <div className='get-started1 flex items-center pl-2'>
                            <span>Get Started</span>
                            <img src={bluerightarrow} alt="bluerightarrow-icon" />
                        </div>
                    </div>
                </div>
                <div className="getlisted-grid-items flex items-center justify-between">
                    <div>
                        <h3>3k+</h3>
                        <p>Consultants & Firms</p>
                    </div>
                    <div>
                        <h3>44</h3>
                        <p>Consultants & Firms</p>
                    </div>
                    <div>
                        <h3>99%</h3>
                        <p>Service coverage</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

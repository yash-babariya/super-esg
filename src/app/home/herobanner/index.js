import React from 'react';
import './herobanner.scss';
import downArrow from '../../../assets/icons/outline-down.svg';
import rightarrow from '../../../assets/icons/right-arrow.svg';

export default function Hearobanner() {
    return (
        <div className='herobanner bg-light-blue pt-[116px] pb-[184px]'>
            <div className="container">
                <div className="herosection px-[60px]">
                    <h1>Superior on-demand ESG consultancy</h1>
                    <p className='font-default'>The world’s top ESG consultancy platform. Find the best ESG consultancy partner in seconds.</p>
                    <div className="search-bar">
                        <div className="search-bar-grid grid grid-cols-[134px_250px_1fr] gap-3 items-center">
                            <div className="serch-bar-grid-item">
                                <button className='button1 flex items-center'>
                                    <span className='pr-2'>Consultant</span>
                                    <img src={downArrow} alt="Downarrow" />
                                </button>
                            </div>
                            <div className="serch-bar-grid-item">
                                <input type="text" placeholder="Search by name or expertise" className='font-default text-base' />
                            </div>
                            <div className="serch-bar-grid-item flex">
                                <div className="button"><button className='button transparent white'>Filters</button></div>
                                <div className="button"><button className='button transparent blue'>Search</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="select-button flex items-center gap-3 flex-wrap">
                        <button>
                            <span>EU Taxonomy</span>
                            <img src={rightarrow} alt="rightarrow" />
                        </button>
                        <button>
                            <span>SASB</span>
                            <img src={rightarrow} alt="rightarrow" />
                        </button>
                        <button>
                            <span>Carbon</span>
                            <img src={rightarrow} alt="rightarrow" />
                        </button>
                        <button>
                            <span>ISS ESG</span>
                            <img src={rightarrow} alt="rightarrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

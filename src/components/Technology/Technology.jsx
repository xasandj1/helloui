import React from 'react'
import images from '../../data/images'
import './Technology.scss'

const Technology = () => {
    return (
        <>
            <section className='technology'>
                <div className='container'>
                    <div className='technology-content'>
                        <div className='technology-content_top'>
                            <h2 className='technology-content_top-title'>Award-winning logistics services.Powered by, delivered by experts.</h2>
                            <p className='technology-content_top-txt'>Businesses are leaving money on the table every day due to missed supply chain opportunities. Zencargo unlocks your potential with digital freight forwarding that drives cost savings and revenue improvements for your business.</p>
                            <div className='technology-content_top-btns'>
                                <button className='technology-content_top-btns_btn'><span>!</span> See How Spellon Work</button>
                            </div>
                        </div>
                        <div className='technology-content_bottom row'>
                            <div className='technology-content_bottom-info col-12 col-lg-6'>
                                <h2 className='technology-content_bottom-info_title'>Develop</h2>
                                <p className='technology-content_bottom-info_txt'>Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.</p>
                                <a href="#!" className='technology-content_bottom-info_link'>Learn more about spellon</a>
                            </div>
                            <div className='technology-content_bottom-img col-12 col-lg-6'>
                                <img src={images.develop} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='technology'>
                <div className='container'>
                    <div className='technology-content'>
                        <div className='technology-content_bottom row'>
                            <div className='technology-content_bottom-img col-12 col-lg-6'>
                                <img src={images.build} alt="" />
                            </div>
                            <div className='technology-content_bottom-info col-12 col-lg-6'>
                                <h2 className='technology-content_bottom-info_title'>Build</h2>
                                <p className='technology-content_bottom-info_txt'>Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.</p>
                                <a href="#!" className='technology-content_bottom-info_link'>Learn more about spellon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='technology'>
                <div className='container'>
                    <div className='technology-content'>
                        <div className='technology-content_bottom row'>
                            <div className='technology-content_bottom-info col-12 col-lg-6'>
                                <h2 className='technology-content_bottom-info_title'>Update</h2>
                                <p className='technology-content_bottom-info_txt'>Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.</p>
                                <a href="#!" className='technology-content_bottom-info_link'>Learn more about spellon</a>
                            </div>
                            <div className='technology-content_bottom-img col-12 col-lg-6'>
                                <img src={images.update} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technology
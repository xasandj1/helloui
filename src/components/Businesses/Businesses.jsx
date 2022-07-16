import React from 'react'
import images from '../../data/images'
import './Businesses.scss'

const Businesses = () => {
    return (
        <section className='businesses'>
            <div className='container'>
                <div className='businesses-content'>
                    <div className='businesses-content_top'>
                        <p className='businesses-content_top-txt'>Over 2000 businesses, marketers and creatives use Suparise to grow their Instagram.</p>
                        <h2 className='businesses-content_top-title'>Don’t just take our word for it</h2>
                    </div>
                    <div className='businesses-content_cards row'>
                        <div className='businesses-content_cards-card col-11 col-lg-3'>
                            <div className='businesses-content_cards-card_top'>
                                <div className='businesses-content_cards-card_user'>
                                    <img src={images.lisa} alt="" />
                                    <div className='businesses-content_cards-card_user-inner'>
                                        <h5>Lisa Miller <span><img src={images.lisatick} alt="" /></span></h5>
                                        <a href="mailto:@LisaMillerCool">@LisaMillerCool</a>
                                    </div>
                                </div>
                                <a href="#!"><img src={images.twitter} alt="" /></a>
                            </div>
                            <div className='businesses-content_cards-card_info'>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                            </div>
                        </div>
                        <div className='businesses-content_cards-card col-11 col-lg-3'>
                            <div className='businesses-content_cards-card_top'>
                                <div className='businesses-content_cards-card_user'>
                                    <img src={images.bri} alt="" />
                                    <div className='businesses-content_cards-card_user-inner'>
                                        <h5>Bri<span><img src={images.lisatick} alt="" /></span></h5>
                                        <a href="mailto:@LisaMillerCool">@BriDehlinger</a>
                                    </div>
                                </div>
                                <a href="#!"><img src={images.twitter} alt="" /></a>
                            </div>
                            <div className='businesses-content_cards-card_info'>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                            </div>
                        </div>
                        <div className='businesses-content_cards-card col-11 col-lg-3'>
                            <div className='businesses-content_cards-card_top'>
                                <div className='businesses-content_cards-card_user'>
                                    <img src={images.carlo} alt="" />
                                    <div className='businesses-content_cards-card_user-inner'>
                                        <h5>CarolMcKeon<span><img src={images.lisatick} alt="" /></span></h5>
                                        <a href="mailto:@LisaMillerCool">@LisaMillerCool</a>
                                    </div>
                                </div>
                                <a href="#!"><img src={images.twitter} alt="" /></a>
                            </div>
                            <div className='businesses-content_cards-card_info'>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out.</p>
                            </div>
                        </div>
                        <div className='businesses-content_cards-card col-11 col-lg-3'>
                            <div className='businesses-content_cards-card_top'>
                                <div className='businesses-content_cards-card_user'>
                                    <img src={images.wes} alt="" />
                                    <div className='businesses-content_cards-card_user-inner'>
                                        <h5>Wes Johnson<span><img src={images.lisatick} alt="" /></span></h5>
                                        <a href="mailto:@LisaMillerCool">@LisaMillerCool</a>
                                    </div>
                                </div>
                                <a href="#!"><img src={images.twitter} alt="" /></a>
                            </div>
                            <div className='businesses-content_cards-card_info'>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                            </div>
                        </div>
                        <div className='businesses-content_cards-card col-11 col-lg-3'>
                            <div className='businesses-content_cards-card_top'>
                                <div className='businesses-content_cards-card_user'>
                                    <img src={images.lisam} alt="" />
                                    <div className='businesses-content_cards-card_user-inner'>
                                        <h5>Lisa Miller <span><img src={images.lisatick} alt="" /></span></h5>
                                        <a href="mailto:@LisaMillerCool">@LisaMillerCool</a>
                                    </div>
                                </div>
                                <a href="#!"><img src={images.twitter} alt="" /></a>
                            </div>
                            <div className='businesses-content_cards-card_info'>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use.</p>
                            </div>
                        </div>
                        <div className='businesses-content_cards-card col-11 col-lg-3 col'>
                            <div className='businesses-content_cards-card_top'>
                                <div className='businesses-content_cards-card_user'>
                                    <img src={images.traver} alt="" />
                                    <div className='businesses-content_cards-card_user-inner'>
                                        <h5>Traver<span><img src={images.lisatick} alt="" /></span></h5>
                                        <a href="mailto:@LisaMillerCool">@LisaMillerCool</a>
                                    </div>
                                </div>
                                <a href="#!"><img src={images.twitter} alt="" /></a>
                            </div>
                            <div className='businesses-content_cards-card_info'>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                                <p>It’s difficult to make a tool that is powerful, easy video
                                    to use, and stays out of the way. @expo has student
                                    figured it out and it’s one of the most and they want to
                                    pleasurable dev experiences I’ve had in my seen that
                                    career goal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Businesses
import React from 'react'
import images from '../../data/images'
import "./Sell.scss"
const Sell = () => {
  return (
    <section className='sell'>
      <div className='container'>
        <div className='sell-content'>
          <div className='sell-content_top'>
            <h1 className='sell-content_top-title'>Grow up your sells with us.</h1>
            <p className='sell-content_top-txt'>Build one project that runs natively on all your term now users' devices to turn for that you can do.</p>
            <div className='sell-content_top-btns'>
              <button className='sell-content_top-btns_btn  active'>Try for Free</button>
              <button className='sell-content_top-btns_btn'>Discover in Video</button>
            </div>
          </div>
          <div className='sell-content_bottom'>
          <img src={images.dashboard} alt="" />
          </div>
          <div className='sell-content_info'>
            <p className='sell-content_info-txt'>More than 1.8 million people across 50,000 companies choose Spellon</p>
            <div className='sell-content_info-supports'>
            <img src={images.jll} alt="" />
            <img src={images.netflix} alt="" />
            <img src={images.hubspot} alt="" />
            <img src={images.atlassian} alt="" />
            <img src={images.juniper} alt="" />
            <img src={images.lacoste} alt="" />
            </div>
          </div>
          <div className='sell-content_hr'></div>
        </div>
      </div>
    </section>
  )
}
export default Sell
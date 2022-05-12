import React from 'react'
import Profile from '../Assets/Icons/Profile.png'
import Edit from '../Assets/Icons/Edit.png'
import Money from '../Assets/Icons/Money.png'
import Arrow2 from '../Assets/Icons/Arrow2.png'
import '../Styles/getStarted.css'

function GetStarted() {
  return (
    <div className='getStarted'>
      <div className="content-get">
        <h1 className='getString'>Get started in a few minutes</h1>
      </div>
      <div className="boxes-get">
        <div className="box-get1">
          <img className='icon-get' src={Profile} alt="icon" />
          <div className="content-box-get">
            <h1 className='subtitle-get'>Crate an account.</h1>
            <p className='paragrafo-get'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis.</p>
            <div className="explore">
              <p>Explore</p>
              <img className='arrow2' src={Arrow2} alt="" />
            </div>
          </div>
        </div>
        <div className="box-get1">
          <img className='icon-gett' src={Edit} alt="icon" />
          <div className="content-box-get">
            <h1 className='subtitle-get'>Link your bank account.</h1>
            <p className='paragrafo-get'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis.</p>
            <div className="explore">
              <p>Explore</p>
              <img className='arrow2' src={Arrow2} alt="" />
            </div>
          </div>
        </div>
        <div className="box-get1">
          <img className='icon-gett' src={Money} alt="icon" />
          <div className="content-box-get">
            <h1 className='subtitle-get'>Start buying & selling.
            </h1>
            <p className='paragrafo-get'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis.</p>
            <div className="explore">
              <p>Explore</p>
              <img className='arrow2' src={Arrow2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
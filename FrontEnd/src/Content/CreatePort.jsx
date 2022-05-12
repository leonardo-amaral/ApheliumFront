import React from 'react'
import Clock from '../Assets/Icons/CurrencyPort/Clock.png'
import PersonCheck from '../Assets/Icons/CurrencyPort/PersonCheck.png'
import Secure from '../Assets/Icons/CurrencyPort/Secure.png'
import Shop from '../Assets/Icons/CurrencyPort/Shop.png'
import Tree from '../Assets/Icons/CurrencyPort/Tree.png'
import '../Styles/createPort.css'

function CreatePort() {
  return (
    <div className='createPort'>
      <div className="introduction">
        <h1 className='crate-create'>Create your cryptocurrency portfolio today</h1>
        <p className='paragrafo-create'>Tendex has a variety of features that make it the best place to start trading</p>
        <img className='clock' src={Clock} alt="" />
      </div>
      <div className="box-create-columm">
        <div className="boxes-createe">
          <div className="boxes-create">
            <div className="title-create">
              <img src={PersonCheck} alt="" />
              <h1 className='h1-person'>Manage your portifolio.</h1>
            </div>
            <p className='paragrafo-box-create'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
          <div className="boxes-create">
            <div className="title-create">
              <img src={Secure} alt="" />
              <h1 className='h1-person'>Vault Protection.</h1>
            </div>
            <p className='paragrafo-box-create'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
        </div>
        <div className="boxes-createe">
          <div className="boxes-create">
            <div className="title-create">
              <img src={Shop} alt="" />
              <h1 className='h1-person'>Recurring buys.</h1>
            </div>
            <p className='paragrafo-box-create'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
          <div className="boxes-create">
            <div className="title-create">
              <img src={Tree} alt="" />
              <h1 className='h1-person'>Preserve nature</h1>
            </div>
            <p className='paragrafo-box-create'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePort
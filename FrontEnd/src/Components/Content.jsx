import React, { useState } from 'react'
import Bitcoin from '../Assets/Bitcoin.png'
import Arrow from '../Assets/Arrow1.png'
import '../Styles/Content.css'

function Content() {
  const [calc, setCalc] = useState()
  let number = 2.75
  let porcentage = number / 10

  function calculation() {
    let calculo = calc * porcentage
    let result = parseInt(calc) + parseInt(calculo)
    return result
  }

  return (
    <div className='content'>
      <section className='section-1'>
        <div className="content-section1">
          <div className="frase">
            <div className="frase1">
              <h1 className='Trade-with'>Trade with</h1>
              <h1 className='aphelium'>APHELIUM</h1>
            </div>
            <h1 className='Buy-and'>Buy and sell cryptocrurrency</h1>
            <p className='p'>Fast and secure way to purchase or exchange 150+ <br></br>cryptocurrencies</p>
          </div>
          <button className='btn-getstarted'>Get started!</button>
        </div>
      </section>
      <section className='section-2'>
        <div className="box">
          <div className="content-box">
            <h1 className='Search'>SEARCH A CRIPTO...</h1>
            <input className='search-input' type="text" placeholder='Bitcoin' />
          </div>
          <div className="bitcoin-result">
            <div className="cripto">
              <img className='bitcoin-logo' src={Bitcoin} alt="" />
              <h1 className='name-result'>BITCOIN</h1>
            </div>
            <h1 className='porcentage'>{number}%</h1>
          </div>
          <div className="simulate">
            <h1 className='simulate-title'>SIMULATE</h1>
            <div className="inputs-simulate">
              <input onChange={e => setCalc(e.target.value)} className='input-simulate' type="text" />
              <img src={Arrow} alt="" />
              <input className='input-simulate' type="text" value={calculation()} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
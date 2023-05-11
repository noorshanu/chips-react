import React from 'react'
import Image_1 from '../../assets/Ben/img-features-default-1.svg'
import Image_2 from '../../assets/Ben/img-features-default-2.svg'
import Image_3 from '../../assets/Ben/img-features-default-3.svg'
import Image_4 from '../../assets/Ben/img-features-default-4.svg'
import './Benefit.css'


function Benefit() {
  return (
    <section className='benefit'>
    <div className='container'>
    <div className="text-center usecase-head">
          <h1>Benefits</h1>
        </div>
      <div className='benefit-grid'>
        <div className='benefit-box'>
          <img src={Image_1} alt="" /> 
          <h2>Developers</h2>
          <p>Make your application cross-chain capable using our API and SDK.</p>

        </div>


        <div className='benefit-box'>
          <img src={Image_2} alt="" /> 
          <h2>Developers</h2>
          <p>Make your application cross-chain capable using our API and SDK.</p>

        </div>



        <div className='benefit-box'>
          <img src={Image_3} alt="" /> 
          <h2>Developers</h2>
          <p>Make your application cross-chain capable using our API and SDK.</p>

        </div>


        <div className='benefit-box'>
          <img src={Image_4} alt="" /> 
          <h2>Developers</h2>
          <p>Make your application cross-chain capable using our API and SDK.</p>

        </div>

      </div>

    </div>
    </section>
  )
}

export default Benefit
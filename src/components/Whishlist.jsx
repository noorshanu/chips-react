import React from 'react'

function Whishlist() {
  return (
    <section className='wishlist'>
      <div className='container'>
        <div className='text-center mb-4'>
          <p>Get early access and benefits for early adopters:</p>
          <h1>Join Our Waitlist</h1>

        </div>
        <div className='form-box'>
          <form action="">
            <input type="text" placeholder='Enter Your Email' />
            <button className='magic-btn2'>Submit</button>
          </form>

        </div>

      </div>
    </section>
  )
}

export default Whishlist
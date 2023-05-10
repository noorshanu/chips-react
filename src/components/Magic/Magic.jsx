import React from 'react'
import Lottie from "react-lottie";
import './Magic.css'
import Meta from './chart.json';
function Magic() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Meta,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <section className='magic'>
        <div className='container'>
            <div className='magic-head'>
                <h1>How The Magic Happens</h1>

                <p>Kima’s technology uses hardware based security measures to maintain the highest security standards that currently exist in Web3.</p>

                <div className='magic-btn'>
                    <button>Our Technology</button>
                </div>

            </div>

        </div>
        <div className='chart-json'>
        <Lottie
                  options={defaultOptions}
                  className="loti-1"
                  width="auto"
                />
        </div>
    </section>
  )
}

export default Magic
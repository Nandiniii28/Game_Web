import React from 'react'
import { SliderBanner } from './SliderBanner';
import SimpleParallax from "simple-parallax-js";
export const GameInstrctions: React.FC = ()  =>{
  return (
    <>
    
    <div className="primary-bg py-5 position-relative">
        <div className="container">
          <div className="row py-5 align-items-center">
          <SimpleParallax
          scale={4}
          delay={0.1}
          transition='cubic-bezier(0.4, 0.2, 0.2, 1)' 

        >

          <img src='./public/images/poker-coin.png' className='img-fluid bg-coins-1' />

        </SimpleParallax>
        <SimpleParallax
          scale={4}
          delay={0.2}
          transition='cubic-bezier(0.4, 0.2, 0.2, 1)' 

        >
          <img src='./public/images/casino_chips_107.png' className='img-fluid bg-coins-2' />
        </SimpleParallax>
            <div className="col-md-6 col-sm-12 px-5">
              <div className="parallax-container">
                <SimpleParallax
                  scale={1.7}
                >
                  <img src="./public/images/side-img.webp" alt="Content" className="content img-fluid"
                  />

                </SimpleParallax>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 px-3">
              <h2 className="h2 mb-4">Why Choose Finunique GameZone?</h2>
              <p className="text-muted mb-4">
                Experience the best of online gaming with our secure and feature-rich platform.
              </p>
              <ul className='details-list'>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>100% Secure and Legal Platform</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Instant Withdrawals</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Multiple Game Variants</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Regular Tournaments & Bonuses</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0 ">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>24/7 Customer Support</span>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>
      <SliderBanner />
      {/* How to Get Started */}
      <div className="primary-bg py-5 position-relative">
        <div className="container">
          <div className="row py-5 align-items-center">
          <SimpleParallax
          scale={4}
          delay={0.1}
          transition='cubic-bezier(0.4, 0.2, 0.2, 1)' 

        >

          <img src='./public/images/poker-coin.png' className='img-fluid bg-coins-1' />

        </SimpleParallax>
        <SimpleParallax
          scale={4}
          delay={0.1}
          transition='cubic-bezier(0.4, 0.2, 0.2, 1)' 

        >
          <img src='./public/images/casino_chips_107.png' className='img-fluid bg-coins-2' />
        </SimpleParallax>
            <div className="col-md-6 px-3 col-sm-12">
              <h2 className="h2 mb-4">How to Get Started</h2>
              <p className="text-muted mb-4">
                Start playing your favorite card games in just a few simple steps.
              </p>
              <ul className='details-list'>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Register and verify your account</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Add money to your wallet</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Choose your favorite game</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Start playing and winning</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-success flex-shrink-0 ">
                    <i className="bi bi-check2-circle"></i>
                  </span>
                  <span>Withdraw winnings instantly</span>
                </li>
              </ul>

            </div>
            <div className="col-md-6 col-sm-12 px-5">
              <div className="parallax-container">
                <SimpleParallax
                  orientation="right"
                  scale={1.7}
                >
                  <img src="./public/images/SL-5.webp" alt="Content" className="content img-fluid"
                    data-aos="fade-up"
                    style={{
                      transform: "translate(-50%, 50%)",
                      animation: "moveDiagonal 2s linear forwards",
                      borderRadius:"10px"
                    }}
                  />

                </SimpleParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

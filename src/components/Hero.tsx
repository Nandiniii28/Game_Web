import React, { useEffect } from "react";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SliderBanner } from './SliderBanner';
import SimpleParallax from "simple-parallax-js";
import AOS from "aos";
import "aos/dist/aos.css";
export const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="hero">
        <div className="container text-center" style={{ height: "fit-content", padding: "6rem 0" }}>
          <div className='row'>
            <div className='col-md-12 text-start fade-up'>
              <h1 className="display-4 fw-bold mb-4 ">
                Experience the Thrill of Online Gaming
              </h1>
              <p className="lead mb-4">
                Play your favorite games with millions of players
              </p>
              <Link
                to="/games"
                className="btn playBtn"
              >
                Play Now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>


        </div>
      </div>
      {/* Game Content Section */}
      <div className="primary-bg py-5">
        <div className="container">
          <div className="row py-5 align-items-center">
            <div className="col-md-6 col-sm-12 px-5">
              <div className="parallax-container">
                <SimpleParallax
                  scale={1.7}
                >
                  <img src="./public/images/F-img.jpg" alt="Content" className="content img-fluid"
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
      {/* Key Features */}
      <div className="primary-bg py-5">
        <div className="container">
          <div className="row py-5 align-items-center">
            <div className="col-md-6 col-sm-12">
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
                  <img src="./public/images/F-img.jpg" alt="Content" className="content img-fluid"
                    data-aos="fade-up"
                    style={{
                      transform: "translate(-50%, 50%)",
                      animation: "moveDiagonal 2s linear forwards",
                    }}
                  />

                </SimpleParallax>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
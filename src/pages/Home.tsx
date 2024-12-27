import React from 'react';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
import SimpleParallax from "simple-parallax-js";

import { Link } from 'react-router-dom';
import { GameInstrctions } from '../components/GameInstrctions';
import { Testimonials } from '../components/Testimonials';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      {/* Games Section */}

      <div className="games-section border-bottom">
        <div className="row g-0">
          <div className="col-md-12">
            <h1 className="heading">
              <span className="title_text">You can enjoy your favorite games with us</span>
            </h1>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row g-0">
            <div className="col-md-4 px-2">
              <div className="game-bx mb-2 casino-game">
                <div className="inner-bx">
                  <div className="inner-card">
                    <div className="game-heading">
                      <h4>Welcome Clasic Casino</h4>
                      <Link to="/games" className="btn description-link">
                        <div className="icon">
                          <i className='bi bi-arrow-right'></i>
                        </div>
                        <span className="link_text">Read more</span>

                      </Link>
                    </div>
                    <div className="sc_services_item_text"><p>Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing…</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="game-bx mb-2 poker-game">
                <div className="inner-bx">
                  <div className="inner-card">
                    <div className="game-heading">
                      <h4>Welcome Clasic Poker</h4>
                      <Link to="/games" className="btn description-link">
                        <div className="icon">
                          <i className='bi bi-arrow-right'></i>
                        </div>
                        <span className="link_text">Read more</span>

                      </Link>
                    </div>
                    <div className="sc_services_item_text"><p>Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing…</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="game-bx mb-2 ludo-game">
                <div className="inner-bx">
                  <div className="inner-card">
                    <div className="game-heading">
                      <h4>Welcome Premium Ludo</h4>
                      <Link to="/games" className="btn description-link">
                        <div className="icon">
                          <i className='bi bi-arrow-right'></i>
                        </div>
                        <span className="link_text">Read more</span>

                      </Link>
                    </div>
                    <div className="sc_services_item_text"><p>Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing…</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <GameInstrctions />

      <Testimonials />
      {/* Key Features Section */}
      <div className="border-top border-bottom position-relative"
        style={{
          backgroundImage: "url(./public/images/10016606_27269.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          backgroundSize: "cover",
        }}
      >
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
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 mb-5">
              <div className="heading text-center">
                <h2>Key Features</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="games-card">
                <div className="game-icon mb-3">
                  <img src='./public/images/game-1.webp' />
                </div>
                <div className="game-content">
                  <h3>Secure Gaming</h3>
                  <p>RNG certified platform with secure payment gateways</p>
                  <Link to="#" className="readmoreBtn">
                    <span className="link_text">Read More</span>
                    <i className="bi bi-arrow-right link_icon"></i>
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="games-card">
                <div className="game-icon mb-3">
                  <img src='./public/images/game-2.webp' />
                </div>
                <div className="game-content">
                  <h3>24/7 Support</h3>
                  <p>Round the clock customer support via chat and email</p>
                  <Link to="#" className="readmoreBtn">
                    <span className="link_text">Read More</span>
                    <i className="bi bi-arrow-right link_icon"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="games-card">
                <div className="game-icon mb-3">
                  <img src='./public/images/game-5.webp' />
                </div>
                <div className="game-content">
                  <h3>Multiple Variants</h3>
                  <p>Choose from Points, Pool, and Deals Rummy</p>
                  <Link to="#" className="readmoreBtn">
                    <span className="link_text">Read More</span>
                    <i className="bi bi-arrow-right link_icon"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="games-card ">
                <div className="game-icon mb-3">
                  <img src='./public/images/game-6.webp' />
                </div>
                <div className="game-content">
                  <h3>Instant Withdrawals</h3>
                  <p>Fast and hassle-free withdrawal process</p>
                  <Link to="#" className="readmoreBtn">
                    <span className="link_text">Read More</span>
                    <i className="bi bi-arrow-right link_icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};
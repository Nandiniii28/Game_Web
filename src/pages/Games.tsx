import React from 'react';
import SimpleParallax from "simple-parallax-js";
import Marquee from 'react-fast-marquee';
export const Games: React.FC = () => {
  return (
    <div>
      {/* Games Banner */}
      <div className="bg-primary text-white py-5 upper-bg"
        style={{ backgroundImage: "url('./public/images/card-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", alignContent: "center", backgroundAttachment: "fixed" }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 col-sm-12 px-2 mb-2">
              <div className="side_game_img p-5 pb-1">
                <img src='./public/images/jackpot.webp' className='img-fluid' style={{ borderRadius: "14px", transition: "transform 0.5s ease-in-out" }} />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 px-2 mb-2">
              <div className="side_game_content p-5">
                <h2>Welcome to the best online casino: win your million in slots</h2>
                <p className='mt-4'>Play your favorite games with millions of players</p>
                <button className="bonusBtn">Check Bonus</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="games-section border-bottom">
        <div className="row g-0">
          <div className="col-md-12">
            <h1 className="heading my-5">
              <p>FOR YOU</p>
              <span className="title_text" style={{ fontSize: "36px" }}>Featured games</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-4 mb-3 px-2">
              <div className="games-cards">
                <div className="game-card-img">
                  <img src='./public/images/SL-2.webp' alt='poker' className='img-fluid rounded-4' style={{ transition: "transform 0.5s ease-in-out" }} />
                </div>
                <div className="game-body d-flex justify-content-between py-4">
                  <div className="game-name">
                    <span className="game_number">01.</span>
                    <span className="game_item_title_text">Premium Poker</span>
                  </div>
                  <div className="link_icon">
                    <i className='bi bi-arrow-right'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 px-2">
              <div className="games-cards">
                <div className="game-card-img">
                  <img src='./public/images/SL-11.webp' alt='poker' className='img-fluid rounded-4' style={{ transition: "transform 0.5s ease-in-out" }} />
                </div>
                <div className="game-body d-flex justify-content-between py-4">
                  <div className="game-name">
                    <span className="game_number">02.</span>
                    <span className="game_item_title_text">Special Ludo</span>
                  </div>
                  <div className="link_icon">
                    <i className='bi bi-arrow-right'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 px-2">
              <div className="games-cards">
                <div className="game-card-img">
                  <img src='./public/images/casino-card.webp' alt='poker' className='img-fluid rounded-4' style={{ transition: "transform 0.5s ease-in-out" }} />
                </div>
                <div className="game-body d-flex justify-content-between py-4">
                  <div className="game-name">
                    <span className="game_number">03.</span>
                    <span className="game_item_title_text">Classical Rummy</span>
                  </div>
                  <div className="link_icon">
                    <i className='bi bi-arrow-right'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 text-center pt-5">
              <div className="startedBtn">
                <button className='btn startBtn'>Get Started</button>
              </div>
            </div>
          </div>

        </div>
        {/* Scrollable Marquee */}
        <div className="container-fluid pb-4">
          <div className="row g-0">
            <div className="col-md-12 p-0">
              <div className="marquee-container">
                <div className="marquee">
                  <Marquee speed={50} style={{ animationDuration: `${50}s` }}>
                    <h1>jackpot casino games</h1>
                    <img src='./public/images/rummy.webp' style={{ margin: "0px 48px", transition: "transform 0.5s ease-in-out" }} />
                    <h1>jackpot casino games</h1>
                    <img src='./public/images/rummy.webp' style={{ margin: "0px 48px", transition: "transform 0.5s ease-in-out" }} />

                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Subscription Section */}
        <div className="subscription-bg">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="subscription-card">
                  <div className="subscription-content">
                    <h2>Subscribe for the exclusive updates!</h2>
                    <p>Get exclusive offers and updates</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="subscription-form">
                  <input type="email" placeholder="Enter your email" />
                  <br />
                  <button className='btn subscribeBtn mt-3'><i className="bi bi-send me-2"></i> Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Games Details */}
        <div className="container-fluid games_card_page_section">
          <div className="container">
            <div className="row my-5">
              <div className="col-md-6">
                <div className="side-img">
                  <SimpleParallax
                    scale={1.7}
                  >
                    <img src='./public/images/card-bg2.webp' className='img-fluid' style={{ transition: "transform 0.5s ease-in-out", borderRadius: "14px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", backdropFilter: "blur(4px)", }} />
                  </SimpleParallax>
                </div>
              </div>
              <div className="col-md-6" style={{position:'relative', zIndex:"10"}}>
                <div className="side-content">
                  <h2 className="h2">Responsible Play & 100% Legal </h2>
                  <p className='mt-4'>Players must be 18 years of age to play real money rummy games. Multiple play limits to keep your experience pleasurable!</p>
                  <p>Rummy was declared to be a game of skill by the Honbl. Supreme Court of India in 1968 and is 100% legal to play for free or cash.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { AboutBanner } from '../components/AboutBanner';
import SimpleParallax from "simple-parallax-js";

import { Link } from 'react-router-dom';
export const About: React.FC = () => {
  return (
    <>
      <AboutBanner />
      <div className="about-content-section position-relative">
        <div className="container">
          <SimpleParallax
            scale={4}
            delay={0.1}
            transition='cubic-bezier(0.4, 0.2, 0.2, 1)'

          >

            <img src='./public/images/poker-coin.png' className='img-fluid bg-coins-1' />

          </SimpleParallax>
          <div className="row">
            <div className="col-md-12">
              <div className="clearfix">
                <img src="./public/images/card-bg.webp" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width" alt="policy img" />
                <h2 className='my-3'>About Us</h2>
                <p>We provide 24x7 chat supports through chat bots, WhatsApp mobile number and in Social Media profiles. Users can also contact us with their details and issues through email ids or can contact us in our mentioned contact us section. The game itself has the smart and attractive avatars both male and female version which makes the playing board more attractive. The recently updated themes are not only attractive but also customized for all types of screens and platforms.</p>
                <p>Rummy Boom is Indian's one of the most trusting and fastest growing online cash rummy App with 100000 online users both in web and mobile platforms. Once users register in RuzRummy online platform or in the app, users can feel the real rummy playing experiences, where users will play with their playing abilities and strategies. User will get welcome bonus and also gifts while playing the game. Master Rummy special deals and offers will sure attract and engage the users with real money rummy playing experiences.
                  Users can withdraw the amount any time in terms of cash through UPI such as PayTm, Phone Pay and many more supporting various banks, this justify the real cash Rummy game experience.</p>
                <h2 className='my-3' style={{ fontWeight: "600" }}>Learn How to Play Rummy</h2>
                <p>To start, each player is dealt a set number of cards from a standard deck. Learning how to play rummy can help develop strategic thinking and enhance card game skills. Rummy Boom offers a convenient platform for enthusiasts to enjoy its challenges and social aspects from anywhere. Here’s a quick guide to learning how to play rummy online</p>
                <p className='mb-1 mt-3' style={{ fontSize: "14px", fontWeight: "600" }}>Objective of the game:</p>
                <p>Arrange your cards in required combinations (either all sequences, or sequences and sets) and make a valid declaration before everyone else playing at the table.</p>
                <p className='mb-1 mt-3' style={{ fontSize: "14px", fontWeight: "600" }}>Game setup:</p>
                <p>At the beginning of the game, each player is dealt 13 random cards from a standard deck/pile of 52 cards and a printed joker. If more than two players are participating, 2 decks of 52 cards each plus 2 printed jokers are used in the game. As per rummy rules, you must pick a card from either the closed deck or the open deck on each turn and then discard (throw away) an unwanted card from your hand to the open deck.
                  If all your cards are arranged according to the game rules and you make a valid declaration first, you win the game. When you win a cash game or tournament, a cash prize is credited to your account.</p>

                <h2 className='my-3' style={{ fontWeight: "600" }}>Gameplay</h2>
                <ul className='ps-3'>
                  <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> <b>Drawing cards:</b>On each of your turns, you need to pick the top card either from the closed deck (pile of cards placed face down on the table) or from the open deck. The open deck is the pile of cards discarded by players.</p></li>
                  <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> <b>Making sets and sequences:</b>As you draw/pick and discard cards on your turns, you need to create sequences and sets with the cards in your hand. A sequence has three or more cards of the same suit in consecutive order (for example, 3-4-5 of hearts). A set has three or more cards of the same rank (for example, the 7s of any three suits, or four queens of the four suits). Creating at least 2 sequences is mandatory but making sets is optional. You can arrange all your cards either only in sequences, or in sequences and sets, but all your cards have to be arranged according to the rules.</p></li>
                  <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> <b>Discarding cards:</b> On each of your turns, after picking a card, you must discard one card from your hand to the discard pile. Discard the cards that you don’t need to make any sequence or set.</p></li>
                  <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> <b>Declaration:</b>Once you have made the required sequences (or sequences and sets), make a declaration. Declaring means saying you have arranged all your cards according to the rules and showing your cards to your opponents. If you are the first player to make a declaration and your declaration is valid according to the rummy rules, you win the rummy game.</p></li>
                </ul>
                <h2 className='my-3' style={{ fontWeight: "600" }}>Scoring</h2>
                <p>In rummy, points have a negative value, so every player’s goal is to score zero points. You get penalty points based on the value of your cards that are not arranged according to the game rules. Cards from 2 to 10 are worth their face value (i.e. points equal to the numbers printed on them) and the ace (A), jack, queen, and the king are worth 10 points each.
                  If all your cards are arranged as per the game rules and you make a valid declaration first, your score is zero. The player who scores zero points wins the game.</p>
                <h2 className='my-3' style={{ fontWeight: "600" }}>Winning the game</h2>
                <p>As per rummy game rules, the player with zero points at the time of declaration is the winner.</p>

                <h2 className='my-3' style={{ fontWeight: "600" }}>Recharge Rules</h2>
                <p>Cash recharge can get a corresponding proportion of bonuses according to different recharge amounts. For example, if a player recharges 1000 cash, he will get 1000+1000*30%=1300 gold coins. The specific ratio is as follows:</p>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="table table-bordered text-center rounded-3">
                          <thead>
                            <tr>
                              <th>Recharge Cash</th>
                              <th>Bonus</th>
                              <th>Percentage</th>
                              <th>Coins</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>100</td>
                              <td>5</td>
                              <td>5%</td>
                              <td>105</td>
                            </tr>
                            <tr>
                              <td>300 </td>
                              <td>45</td>
                              <td>15%</td>
                              <td>345</td>
                            </tr>
                            <tr>
                              <td>500 </td>
                              <td>125</td>
                              <td>25%</td>
                              <td>625</td>
                            </tr>
                            <tr>
                              <td>1000</td>
                              <td>300</td>
                              <td>30%</td>
                              <td>1300</td>
                            </tr>
                            <tr>
                              <td>3000</td>
                              <td>1050</td>
                              <td>35%</td>
                              <td>4050</td>
                            </tr>
                            <tr>
                              <td>3000</td>
                              <td>1050</td>
                              <td>35%</td>
                              <td>4050</td>
                            </tr>
                            <tr>
                              <td>5000</td>
                              <td>1750</td>
                              <td>35%</td>
                              <td>6750</td>
                            </tr>
                            <tr>
                              <td>10000</td>
                              <td>4000</td>
                              <td>40%</td>
                              <td>14000</td>
                            </tr>
                            <tr>
                              <td>20000</td>
                              <td>8000</td>
                              <td>40%</td>
                              <td>28000</td>
                            </tr>
                          </tbody>

                        </table>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top border-bottom position-relative"
        style={{
          backgroundImage: "url(./public/images/10016606_27269.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          backgroundSize: "cover",
        }}>
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
        <div className='container mt-5'>
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="heading text-center">
                <h2>The Most Trusted Rummy Boom</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="games-card">
                <div className="game-icon mb-3">
                  <img src='./public/images/game-1.webp' />
                </div>
                <div className="game-content">
                  <h3>100% Safe and Secure</h3>
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
                  <h3>The Great Rummy Experience</h3>
                  <p>Lakhon Real Players - Zero Wait Time Fastest Rummy Game Tables Seamless Gameplay</p>
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
                  <h3>Best Rewards & Services</h3>
                  <p>Exclusive Bonuses & Promotions Free to Play Any Game 24X7 Customer Support</p>
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
                  <h3>Fastest Withdrawals</h3>
                  <p>Fastest Withdrawal Arrival Apply for withdrawals 24x7 Multiple withdrawal Chances</p>
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

    </>
  );
};
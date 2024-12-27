import React from 'react';
export const ResponsibleGaming: React.FC = () => {
  return (
    <>
      <div className="responsible-game-section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 mt-5 text-center d-flex justify-content-center align-items-center">
              <div className="responsible_content">
                <h2 className="h2 mb-4">Responsible Gaming</h2>
                <button className="btn downloadBtn">Download App</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content-section position-relative">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="clearfix">
            <img src="./public/images/card-bg.webp" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width" alt="policy img" />
            <h2 className='my-3'>Responsible Gaming</h2>
            <p>
              We operate as a responsible gaming company and encourage our players to play responsibly. We carefully monitor the playing activities of our players and alert them if they develop any compulsive behavior. We take precautionary measures including the following to make sure that we offer a good online rummy gaming experience.
              People below 18 years of age are not permitted to create a Rummy Boom account or play games on our Website/Mobile App.
            </p>
            <p>
              There is 24/7 monitoring of the players activities with an anti-fraud algorithm to detect any unfair play, including collusion.
              Anti-collusion measures are implemented for every rummy game.
              Player information is confidentially stored using high-level encryption for safety.
              Our Website/Mobile App has features that limit the amounts of cash deposits.
              A cash deposit limit is set on the site to discourage irresponsible gaming and prevent players from making deposits beyond reasonable means.
            </p>
            <p>There is KYC verification for player protection and game security.
              We encourage every player to play responsibly and may send periodic notifications/alerts to players who are found to be spending excessive amounts of time on Rummy Boom, advising them to take a break from gaming on the Website/App.</p>
            <p>If you do not want to play our games for a certain period of time, you can self-exclude yourself from Rummy Boom games for a specific period of time, from 48 hours to 6 months, by using our self-exclusion feature. You can exclude yourself from playing our games for 48 hours, 72 hours, 1 week, 2 weeks, 1 month, 2 months, or 6 months. After you have placed a self-exclusion request and your request has been processed, you shall not be able to play our games for that specific period of time. Please note that a self-exclusion period cannot be reversed or changed once it has been set and confirmed. Moreover, you shall not be allowed to create another account on Rummy Boom. If you have any balancein your Rummy Boom account at the time of making a self-exclusion request, that balance will be retained until your return, unless you place a withdrawal request.</p>
            {/*  */}
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

          </div>
        </div>
      </div>
        </div>
      </div>
      
    </>
  );
};
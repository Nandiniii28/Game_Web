import React from 'react';
import { Hero } from '../components/Hero';
// import { GameCard } from '../components/GameCard';
// import { ContentWithImage } from '../components/ContentWithImage';
import { FAQ } from '../components/FAQ';
// import { features } from '../data/features';
// import { games } from '../data/games';

import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* Features Section */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h2 text-center mb-5">Key Features</h2>
          <div className="row g-4">
            {features.map((feature) => {
              const IconComponent: React.ElementType<{ size: number; className: string }> = Icons[feature.icon as keyof typeof Icons] as React.ElementType<{ size: number; className: string }>;
              return (
                <div key={feature.id} className="col-md-6 col-lg-3">
                  <div className="text-center">
                    <div className="d-inline-flex p-3 bg-primary bg-opacity-10 rounded-circle mb-3">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <h3 className="h5 mb-2">{feature.title}</h3>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Popular Games Section */}
      {/* <section className="py-5">
        <div className="container">
          <h2 className="h2 text-center mb-5">Popular Games</h2>
          <div className="row g-4">
            {games.map((game) => (
              <div key={game.id} className="col-md-6 col-lg-4">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <div className=""
        style={{
          backgroundImage: "url(./public/images/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          backgroundSize: "cover",
        }}
      >
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
                  <img src='./public/images/game-1.png' />
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
                  <img src='./public/images/game-2.png' />
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
                  <img src='./public/images/game-5.png' />
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
                  <img src='./public/images/game-6.png' />
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

      {/* Why Choose Us Section */}
      {/* <ContentWithImage
        title="Why Choose Finunique GameZone?"
        description="Experience the best of online gaming with our secure and feature-rich platform."
        imageUrl="https://images.unsplash.com/photo-1611523658822-385aa008324c?auto=format&fit=crop&q=80&w=800&h=600"
        features={[
          "100% Secure and Legal Platform",
          "Instant Withdrawals",
          "24/7 Customer Support",
          "Multiple Game Variants",
          "Regular Tournaments & Bonuses"
        ]}
      />

      <ContentWithImage
        title="How to Get Started"
        description="Start playing your favorite card games in just a few simple steps."
        imageUrl="https://images.unsplash.com/photo-1636487658547-c05ee4cdc1ac?auto=format&fit=crop&q=80&w=800&h=600"
        features={[
          "Register and verify your account",
          "Add money to your wallet",
          "Choose your favorite game",
          "Start playing and winning",
          "Withdraw winnings instantly"
        ]}
        imageOnRight
      /> */}

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};
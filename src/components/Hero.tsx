import React, { useEffect } from "react";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

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


    </>
  );
};
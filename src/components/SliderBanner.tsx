import React from 'react';
// Import Swiper React components



export const SliderBanner: React.FC = () => {

    return (
        <>
            <div className='main-swiper  py-5'>
                <div className="container">
                <div className="row g-0">
                    <div className="col-md-12 px-3 align-self-end text-end">
                      <div className="text-align">
                        <div className="spacer m-5"></div>
                        <small style={{fontSize:"12px", textTransform:"uppercase", color:"#fff"}}>gamble all you want</small>
                        <h1  style={{fontSize:"40px", textTransform:"uppercase", color:"#fff", textAlign:"end"}}>Have fun and win prizes in daily games!</h1>
                        <button className="bonusBtn">Check Out</button>
                        <div className="spacer m-5"></div>
                      </div>
                    </div>
                </div>
                </div>
                

            </div>

        </>
    );
};
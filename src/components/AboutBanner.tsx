import React from 'react';

export const AboutBanner: React.FC = () => {
  return (
    <>
      <div className="about_section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 mt-5 text-center d-flex justify-content-center align-items-center">
              <div className="about_content">
                <h2 className="h2 mb-4">Cash Rummy on Mobile and Indian Rummy Card Games at Rummy Boom</h2>
                <button className="btn downloadBtn">Download App</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
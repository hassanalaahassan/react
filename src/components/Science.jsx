import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import "./about.css";

const AboutPage = () => {
  return (
    <div className="container my-5">
      <h2>About Company</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">History</h4>
              <h5>Medium length headline</h5>
              <p>
                Lorem ipsum dolor sit amet et delicato accommodare for casual
                companies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Mission Statement</h4>
              <h5>Medium length headline</h5>
              <p>
                Lorem ipsum dolor sit amet et delicato accommodare for casual
                companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
      <h2>Team</h2>
      <div>
        <Carousel
          controls={true}  
          indicators={true}  
          prevIcon={<FaArrowLeft size={30} />} 
          nextIcon={<FaArrowRight size={30} />} 
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Name Surname 1</h5>
                  <p className="card-text">Company</p>
                  <p>Lorem ipsum dolor sit amet et delicato accommodare for casual companies.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Name Surname 2</h5>
                  <p className="card-text">Company</p>
                  <p>Lorem ipsum dolor sit amet et delicato accommodare for casual companies.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Name Surname 3</h5>
                  <p className="card-text">Company</p>
                  <p>Lorem ipsum dolor sit amet et delicato accommodare for casual companies.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

      <div className="row my-5">
        <div className="col-md-6">
          <h2>Clients</h2>
          <h5>Medium length headline</h5>
          <p>
            Lorem ipsum dolor sit amet et delicato accommodare for casual companies.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Partnership</h2>
          <h5>Medium length headline</h5>
          <p>
            Lorem ipsum dolor sit amet et delicato accommodare for casual companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React from "react";
import "./About.style.css";
import FetchApi from "../../fetch-api/fetch-api";
import Footer from "../Footer";
import Navbar from "../../Navbar/Navbar";

import images from "../../images/login_banner.png";
import images1 from "../../images/about_vision.svg"
import images2 from "../../images/about_mission.svg"

function About() {
  return (
    <div>
      <div className="about-container">
        <Navbar />
        <div className="about-top-part">
          <div className="about-heading">
            <h3>Your Talent Scout at ZERO Cost</h3>
            <button className="about-login">Get Started</button>
          </div>
          <div>
            <img
              src={images}
              alt="login_banner.png"
              className="login-banner-image"
            />
          </div>
        </div>
        <div class="body">
          <div class="card_sec">
            <div class="card">
              <div class="card_content">
                <h2>Our Vision</h2>
                <div class="img_circle">
                <img
              src={images1}
              alt="about_vision.svg"
              className="login-banner-image" />
                </div>
                <p>
                  Making the hiring process efficient, effective, and
                  economical.
                </p>
              </div>
              <div class="card_overlay">
              </div>
            </div>
            <div class="card">
              <div class="card_content">
                <h2>Our Mission</h2>
                <div class="img_circle">
                <img
              src={images2}
              alt="about_mission.svg"
              className="login-banner-image" />
                </div>
                <p>
                  Create a technology platform to make the hiring process fast,
                  easy, and cost-effective for all companies and to provide the
                  best talent-to-employer match.
                </p>
              </div>
              <div class="card_overlay"></div>
            </div>
          </div>
          <div class="post_sec">
            <div class="post_full">
              <div class="underline"></div>
              <h2>What we strive to do:</h2>
              <br />
              <p>
                Our goal is to alter the landscape of recruiting, for all hiring
                companies and their hiring teams, by making it the most
                cost-effective and efficient process possible by making the
                exceptional talent accessible on our platform.
              </p>
              <br />
              <p>
                Regardless of whether your recruiting budget is a few million
                dollars or nothing, you will always be able to find the best
                candidates you want on our platform and hire them.
              </p>
              <br />
              <p>
                We provide a <b>Zero base plan</b> for bootstrapped startups and
                small placement agencies to publish their positions on our
                website and search our database for prospects. You could contact
                them, interview them, and hire them at No Cost.
              </p>
              <br />
              <p>
                However, if you have a higher budget and want to showcase your
                brand in order to attract the best talent, we can offer paid
                solutions, that help you get ahead of the curve and hire faster
                &amp; better.
              </p>
              <br />
              <p>
                Our extensive usage of Artificial Intelligence and Machine
                Learning helps in searching, identifying and connecting with the
                best-fit candidates for your job requirements.
              </p>
              <br />
              <p>
                In addition to the technology, our core team of experts, who
                have substantial industry expertise and are engaged in building,
                developing, and administering the platform, ensure you hire the
                best talent that matches your requirements.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <h1>Fetch API Data</h1>
      <br></br>
      <FetchApi />
      <Footer />
    </div>
  );
}

export default About;

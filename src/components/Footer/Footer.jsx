import React from "react";
import "./footer.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer>
      <div className="row div_footer py-1">
        <div className="col-12 ps-0 ">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link p-0 hand-hover">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 hand-hover">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 hand-hover">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 hand-hover">Giveaway</a>
            </li>
            <li className="nav-item">
              <a target="_blank" className="nav-link p-0 hand-hover">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0 hand-hover">
                Terms of Use &amp; Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center py-1 footer_btm">
        <div className="row div_footer">
          <div className="col-6">
            <p className="text-muted">
              All rights reserved © 2023 FindrPro Technology Solutions Pvt. Ltd.
            </p>
          </div>
          <div className="col-6 ml-auto div_f_c">
            <p className="text-muted1">Stay Connected</p>
            <ul className="icons">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Truetalent.io"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/truetalent-io/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.twitter.com/Truetalent_io">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.Instagram.com/Truetalent_io"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@TrueTalent_io"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

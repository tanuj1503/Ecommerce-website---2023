import React from "react";
import "../Footer/footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company">
        <p className="company1">Company</p>
        <div className="content1">
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Partners</p>
        </div>
      </div>

      <div className="solutions">
        <p className="solutions1">Solutions</p>
        <div className="content2">
          <p>Marketing</p>
          <p>Analytics</p>
          <p>Commerce</p>
          <p>Support</p>
        </div>
      </div>

      <div className="documentations">
        <p className="documentations1">Documentations</p>
        <div className="content3">
          <p>Guides</p>
          <p>Api status</p>
        </div>
      </div>

      <div className="legal">
        <p className="legal1">Legal</p>
        <div className="content4">
          <p>Claim</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>

      <div className="copyrights">
        <div className="flex1">
          <CopyrightIcon />
          <p>2023 My Company. All rights reserved</p>
        </div>
        <p>Made with love by me</p>
        <p>E-commerce website using Springboot and React</p>
      </div>
    </div>
  );
};

export default Footer;

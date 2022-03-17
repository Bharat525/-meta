import React from "react";
import twitter from "../../assets/icons/twitter.png";
import linkdin from "../../assets/icons/linkdin.png";
import logo from "../../assets/logo/flat.png";
import "./style.scss";
import { Outlet, Link } from "react-router-dom";


const Footer = () => {
  // return(<></>)

  return (
    <>
    <footer>
      <div className="foot-div">
        <div className="ul-div2">
          <ul className="social">
            <li>
              <Link to="/-meta">
                <img src={logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/term">Term & Services</Link>
            </li>
            <li>
              <Link to="/policy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <a target="_blank" href="https://twitter.com/MetawaveStudios?t=PUaiafJy3lBgNCVJic7ksg&s=08">
            <img src={twitter} alt="" />
          </a>
          <a target="_blank" className="linkdin" href="https://www.linkedin.com/company/metawave-studios/">
            <img src={linkdin} alt="" />
          </a>
        </div>
      </div>
    </footer>
    <Outlet/>

    </>
  );
};

export default Footer;

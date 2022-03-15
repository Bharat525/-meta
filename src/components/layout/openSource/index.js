import React from "react";
import Icon from "../../../assets/icons/icons.svg";
import "./style.scss";
import background from "../../../assets/banner/team-bg.jpg";
import OpenSourceIcon from "../../../assets/icons/open-source.png";

const OpenSource = () => {
  return (
    <section className="open">
      <div className="parent">
        <div className="card">
          <div className="left">
            <img src={OpenSourceIcon} alt="" />
          </div>

          <div className="right">
            <h2>What is Web3?</h2>

            <p>
              Web3 or Web 3.0 is the upcoming third iteration of the evolution
              of the internet that interconnects data in a decentralized way to
              deliver a faster and more personalized user experience. It is
              built using artificial intelligence, machine learning, and the
              semantic web, and uses the blockchain security system to keep your
              information safe and secure. The ultimate goal of Web 3.0 is to
              create a more intelligent, connected, and open internet
            </p>
          </div>
        </div>
        {/* 
        <div className="card-icons">
          <img src={Icon} alt="" />
          <img src={Icon} alt="" />
          <img src={Icon} alt="" />
          <img src={Icon} alt="" />
        </div> */}
      </div>

      <div className="banner" style={{ backgroundImage: `url(${background})` }}>
        <div className="banner-card">
          <h4>
            Find your next role at Metawave and help us make blockchain
            sculpturing the future of finance & the digital culture.
          </h4>

          <a href="">Work with us</a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

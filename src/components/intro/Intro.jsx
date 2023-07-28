import React from "react";
import "./intro.css";
import me from "../../img/me1.jpg";
import screenshot from "../../img/profile.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Parag Naik</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">UI/UX designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content creater</div>
            </div>
          </div>
          <div className="i-desc">
            I'm an analytical thinker, I like to approach a problem step by step
            strategically. I love problem solving and I think it helps us grow
            as an individual. I believe all the problems can be solved if we
            have a strategic plan to handle it be it coding or our daily life
            problem.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

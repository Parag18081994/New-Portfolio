import React from "react";
import "./about.css";
import me2 from "../../img/me2.jpg";
import award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h1 className="a-title1">WHO AM I?</h1>
        <p className="a-sub">
          Hi I'm Parag.Currently working as a Senior Software Engineer at
          Mphasis India Pvt LTD since July 2016. 
        </p>
        <p className="a-desc">
          I have worked full time as a full stack developer for Mpahsis, Pune
          for around 6 years, majorly in MERN stack. The work experience has
          given me insights in the industrial software engineering practices and
          an absolute needed exposure to the problem solving approaches and
          frameworks.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Mphsis Summit Award 2023</h4>
            <p className="a-award-desc">
              Awarded for my impeccable team management and project planning
              skills demonstrated while delivering a high-quality product given
              the stringent time constraint. It also recognizes my adaptability,
              as it requires me to travel to Australia for its implementation
              and delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

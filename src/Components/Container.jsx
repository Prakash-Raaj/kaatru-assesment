import React from 'react';
import userImage from '../assets/images/profile-pic-04.jpg';
import Wind from './Wind';
import Humidity from './Humidity';
import Precipitation from './Precipitation';
import UV from './UV';
import FeelsLike from './FeelsLike';
import Rain from './Rain';
import LeftWrapper from './LeftWrapper';
import Graph from './Graph';

const Container = () => {
  return (
    <div className="container">
      <div className="left-wrapper">
        <LeftWrapper />
      </div>
      <div className="right-wrapper">
        <div className="intro">
          <div className="welcome">
            <h3>Welcome back Isabella!</h3>
            <p>Check out today's weather information</p>
          </div>
          <div className="user">
            <span class="material-symbols-outlined">more_horiz</span>
            <img
              src={userImage}
              alt="user pic"
              className="user-img"
            />
          </div>
        </div>
        <div className="upcoming-graph">
          <Graph />
        </div>
        <div className="more-details">
          <h4>More details of today's weather</h4>
          <div className="first-row">
            <Humidity />
            <Wind />
            <Precipitation />
          </div>
          <div className="second-row">
            <UV />
            <FeelsLike />
            <Rain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

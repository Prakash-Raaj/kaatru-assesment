import React from 'react';
import graph from '../assets/images/graph1.png';

const Graph = () => {
  return (
    <div className="graph-comp">
      <div className="graph-header">
        <div className="graph-title">Upcoming hours</div>
        <div className="second-col">
          <div className="rain-precip">
            Rain precipitation
            <span class="material-icons-outlined">expand_more</span>
          </div>
          <div className="next-days">
            Next days
            <span class="material-icons-outlined">navigate_next</span>
          </div>
        </div>
      </div>
      <img src={graph} alt="graph" className="graph-img" />
    </div>
  );
};

export default Graph;

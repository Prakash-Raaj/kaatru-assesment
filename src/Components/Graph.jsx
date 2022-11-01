import React from 'react';
import GraphTest from './GraphTest';

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
      <div className="area-graph">
        <GraphTest />
      </div>
    </div>
  );
};

export default Graph;

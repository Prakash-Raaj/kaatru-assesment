import GaugeChart from 'react-gauge-chart';

import React from 'react';

const Wind = () => {
  const chartStyle = {
    width: 300,
  };
  return (
    <div className="gauge-chart">
      <div className="wind">
        <p>Wind</p>
        <div className="icons-wrapper">
          <span class="material-icons-outlined">air</span>
        </div>
      </div>
      <div className="wind-gauge">
        <GaugeChart
          id="gauge-chart1"
          nrOfLevels={5}
          colors={[
            '#5C9CE5',
            '#5C9CE5',
            '#E4F1FF',
            '#E4F1FF',
            '#E4F1FF',
          ]}
          cornerRadius={10}
          arcWidth={0.15}
          formatTextValue={(value) => value + 'KM/HR'}
          textColor="#000000"
          needleColor="#5C9CE5"
          needleBaseColor="#5C9CE5"
          percent={0.08}
          style={chartStyle}
        />
      </div>
    </div>
  );
};

export default Wind;

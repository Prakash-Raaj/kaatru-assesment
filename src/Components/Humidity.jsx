import React from 'react';
import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const Humidity = () => {
  const BorderLinearProgress = styled(LinearProgress)(
    ({ theme }) => ({
      height: 12,
      width: 70,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
          theme.palette.grey[
            theme.palette.mode === 'light' ? 200 : 800
          ],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor:
          theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      },
    })
  );
  return (
    <div className="humidity">
      <div className="wind">
        <p>Humidity</p>
        <div className="icons-wrapper">
          <span className="material-icons-outlined">water_drop</span>
        </div>
      </div>
      <p className="humid-value">
        82% <span>bad</span>
      </p>
      <div className="humid-bars">
        <div>
          <span className="humid-bars-value">good</span>
          <BorderLinearProgress variant="determinate" value={100} />
        </div>
        <div>
          <span className="humid-bars-value">normal</span>
          <BorderLinearProgress variant="determinate" value={100} />
        </div>
        <div>
          <span className="humid-bars-value">bad</span>
          <BorderLinearProgress variant="determinate" value={25} />
        </div>
      </div>
    </div>
  );
};

export default Humidity;

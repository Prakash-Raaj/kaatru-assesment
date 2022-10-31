import React from 'react';

import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const FeelsLike = () => {
  const BorderLinearProgress = styled(LinearProgress)(
    ({ theme }) => ({
      height: 12,
      //   maxWidth: '200px',
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
    <div className="feels-like">
      <div className="wind">
        <p>Feels Like</p>
        <div className="icons-wrapper">
          <span className="material-icons-outlined">thermostat</span>
        </div>
      </div>
      <p className="value-bar">30&#176;</p>
      <div className="bar">
        <span className="number-1">0&#176;</span>
        <span className="number-2">25&#176;</span>
        <span className="number-3">50&#176;</span>

        <BorderLinearProgress variant="determinate" value={65} />
      </div>
    </div>
  );
};

export default FeelsLike;

import React from 'react';

import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const UV = () => {
  const BorderLinearProgress = styled(LinearProgress)(
    ({ theme }) => ({
      height: 12,
      width: 40,
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
    <div className="uv-index">
      <div className="wind">
        <p>UV index</p>
        <div className="icons-wrapper">
          <span className="material-icons-outlined">light_mode</span>
        </div>
      </div>
      <p className="uv-index-value">
        4 <span>medium</span>
      </p>

      <div className="humid-bars">
        <div>
          <span className="humid-bars-value">0-2</span>
          <BorderLinearProgress variant="determinate" value={100} />
        </div>
        <div>
          <span className="humid-bars-value">3-5</span>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
        <div>
          <span className="humid-bars-value">6-7</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">8-10</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">11+</span>
          <BorderLinearProgress variant="determinate" value={0} />
        </div>
      </div>
    </div>
  );
};

export default UV;

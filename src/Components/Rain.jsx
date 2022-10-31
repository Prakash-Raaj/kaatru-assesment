import React from 'react';
import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const Rain = () => {
  const BorderLinearProgress = styled(LinearProgress)(
    ({ theme }) => ({
      height: 12,
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
    <div className="Rain">
      <div className="wind">
        <p>Chances of rain</p>
        <div className="icons-wrapper">
          <span className="material-icons-outlined">
            beach_access
          </span>
        </div>
      </div>
      <p className="rain-value">42%</p>
      <div className="bar">
        <span className="number-1-rain">0%</span>
        <span className="number-2-rain">25%</span>
        <span className="number-3-rain">50%</span>
        <span className="number-4-rain">75%</span>
        <span className="number-5-rain">100%</span>

        <BorderLinearProgress variant="determinate" value={42} />
      </div>
    </div>
  );
};

export default Rain;

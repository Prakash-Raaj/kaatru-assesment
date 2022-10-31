import React from 'react';

import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const Precipitation = () => {
  const BorderLinearProgress = styled(LinearProgress)(
    ({ theme }) => ({
      height: 12,
      //   width: 50,
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
    <div className="precipitation">
      <div className="wind">
        <p>Precipitation</p>
        <div className="icons-wrapper">
          <span className="material-icons-outlined">
            thunderstorm
          </span>
        </div>
      </div>
      <p className="uv-index-value">1.4 cm</p>

      <div className="humid-bars">
        <div>
          <span className="humid-bars-value">0</span>
          <BorderLinearProgress variant="determinate" value={100} />
        </div>
        <div>
          <span className="humid-bars-value">10</span>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
        <div>
          <span className="humid-bars-value">20</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">30</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">40</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">50</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">60</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">70</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">80</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
        <div>
          <span className="humid-bars-value">90</span>
          <BorderLinearProgress variant="determinate" value={-10} />
        </div>
      </div>
    </div>
  );
};

export default Precipitation;

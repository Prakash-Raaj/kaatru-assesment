import React from 'react';
import { Stack, Typography, Switch } from '@mui/material';
import sunrise from '../assets/images/scrapper.png';

const LeftWrapper = () => {
  return (
    <div className="left-container">
      <div className="header">
        <div className="plus-wrap">
          <span class="material-icons-outlined">add</span>
        </div>
        <div class="dot-navigation">
          <div class="dot-navigation__item--active"></div>
          <div class="dot-navigation__item"></div>
          <div class="dot-navigation__item"></div>
        </div>
        <Stack direction="row" alignItems="center">
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600',
            }}
          >
            &#8451;
          </Typography>
          <Switch
            defaultChecked
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600',
            }}
          >
            &#176;F
          </Typography>
        </Stack>
      </div>
      <div className="city-date">
        <div className="city">
          <div className="city-name">
            <span class="material-icons-outlined">navigation</span>
            <p className="city-name-span">New York, USA</p>
          </div>
          <div className="sunrise">
            <span class="material-icons-outlined">wb_twilight</span>
            <p className="sunrise-time">07:19</p>
          </div>
        </div>
        <div className="date">
          <div className="date-today">Today 28 Sept</div>
          <div className="sunrise">
            <span class="material-icons-outlined">solar_power</span>
            <p className="sunrise-time">19:32</p>
          </div>
        </div>
      </div>
      <div className="temp-display">
        <span class="material-icons-outlined">arrow_back_ios</span>
        <div className="temp-show">27&#176;</div>
        <span class="material-icons-outlined">arrow_forward_ios</span>
      </div>
      <div className="sunny">
        <span class="material-icons-outlined">wb_sunny</span>
        <p>Sunny</p>
      </div>
      <div className="bottom-image">
        <img src={sunrise} alt="sunrise" className="image-sunrise" />
      </div>
    </div>
  );
};

export default LeftWrapper;

import React from 'react';
import ReactSlickSlider from 'react-slick'

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import {SLIDER_BASE_SETTINGS} from '../../utils/constants';

import './index.css';


const Slider = ({children:items}) => {
  const settings = {
    ...SLIDER_BASE_SETTINGS,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }
  return (
    <ReactSlickSlider className='container' {...settings}>
      {items}
    </ReactSlickSlider>
  );
};

export default Slider;

// @flow
import '../css/style.css';
import '../css/slick.css'
import lazySizes from 'lazysizes';
import svgRoom from './room';
import $ from 'jquery';
import slick from 'slick-carousel/slick/slick';
import './scroll';
import './form';

// ! arr
lazySizes.init();
svgRoom();

$(document).ready(function(){
  $('.slick-brown').slick();
  $('.slick-white').slick();
});

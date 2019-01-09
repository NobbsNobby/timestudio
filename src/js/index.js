// @flow
import '../css/style.css';
import '../css/slick.css'
import lazySizes from 'lazysizes';
import svgRoom from './room';
import $ from 'jquery';
import slick from 'slick-carousel/slick/slick';
import './scroll';


lazySizes.init();
svgRoom();

$(document).ready(function(){
  $('.slick-brown').slick();
  $('.slick-white').slick();
});

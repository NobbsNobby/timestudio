// @flow
import '../css/style.css';
import '../css/slick.css';
import lazySizes from 'lazysizes';
import $ from 'jquery';
import slick from 'slick-carousel/slick/slick';
import svgRoom from './room';
import './scroll';
import './form';

// ! arr
lazySizes.init();
svgRoom();

$(document).ready(() => {
    $('.slick-brown').slick();
    $('.slick-white').slick();
});

// tslint:disable
import './scripts/common';
import './stylesheets/common';
import './stylesheets/index';
import './scripts/slider-pets';
import './scripts/navbar';
import './scripts/idea';
import './scripts/hero';
import './scripts/team';
import './scripts/apoio';
import './scripts/bank';
import './util/accessibility';

import './util/sendMessages';

const SmoothScroll = require('smooth-scroll');

const Wow = require('wowjs');

// called in footer
(<any>window).wow = Wow.WOW;
(<any>window).$ = jQuery;

new SmoothScroll('a[href*="#"]', {
    offset: 60
});

const lazyLoad = require('vanilla-lazyload');

// backgroung
new lazyLoad({
    elements_selector: '.lazy',
});
// img
new lazyLoad();

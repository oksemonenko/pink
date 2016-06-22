'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var pageHeader = document.querySelector('.page-header');

var intro = document.querySelector('.intro');

var download = document.querySelector('.download');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');
intro.classList.remove('intro--nojs');

function isDownloadBlock() {
   if (download) {
       download.classList.remove('download--nojs');
   }
}

isDownloadBlock();

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        pageHeader.classList.add('page-header--nav-opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        pageHeader.classList.remove('page-header--nav-opened');
    }
});

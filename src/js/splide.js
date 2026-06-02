import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#sp', {
        type: 'slide',
        gap: 20,
        perPage: 2, 
        arrows: false,

        breakpoints: {
        640: {
            perPage: 2,
        },
        480: {
            perPage: 1,
        }
        }
    }).mount();

    new Splide( '#sp2', {
        type: 'slide',
        gap: 20,
        perPage: 1, 
        arrows: false,
        mediaQuery: 'min',
        breakpoints: {
            480: {
                perPage: 1,
            },
            640: {
                perPage: 2,
            },
            1294: {
                destroy: true
            }
        }
    }).mount();
});
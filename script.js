'use strict';

const scrollBtn = document.querySelector('#scrollBtn');
const firstParagraph = document.querySelector('#firstParagraph');
scrollBtn.addEventListener('click', function() {
    if (window.scrollY > 0) {
        firstParagraph.scrollIntoView();
    } else {
        window.scrollBy(0, window.innerHeight);
    }
});

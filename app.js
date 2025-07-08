'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light";
        console.log('current theme: dark-theme');
    }
    else {
        this.textContent = "Dark";
        console.log('current theme: light-theme');
    }
});

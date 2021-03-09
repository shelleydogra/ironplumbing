//@codekit-prepend "csscript.js"

//Constants

//nav
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#overlay');

btnHamburger.addEventListener('click', function() {
    console.log('click hamberger');

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        overlay.classList.add('hidden');
    } else {
        btnHamburger.classList.add('open');
        overlay.classList.remove('hidden');
    }
})

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    btnHamburger.classList.remove('open');
})
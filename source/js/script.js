//@codekit-prepend "csscript.js"


var video = document.getElementById("bg-video");
video.playbackRate = .55;

//Constants

//nav
const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function() {
    console.log('click hamberger');

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    } else {
        btnHamburger.classList.add('open');
    }
})
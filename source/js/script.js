//@codekit-prepend "csscript.js"

//Constants

//nav
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#overlay');

btnHamburger.addEventListener('click', function() {

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

let data = [{
    "phrases": {
    "goodhands" : "When it comes to the integrity of your plumbing system, you should take all of the necessary precautions.  With our professional x your home will be in good hands at all times.",
    "reasons" : "There are numerous reasons to consider service"
    },
    "info": {
        "phone": "(630) 776-1907",
        "email": "plumber@ironplumber.net"
    }
}
];
    
document.addEventListener('DOMContentLoaded', function() {
    // var phone = document.getElementById('phone');

    var phone = document.querySelectorAll('.wrapper #phone');

    // var geo = document.getElementById('geo');

    // var geoc = document.getElementsByClassName('geoc');

    // var phone = document.querySelectorAll('.wrapper #phone');
    // const geoc = document.querySelectorAll('.wrapper #geoc');

    // phone.innerHTML = "hello";

    // geoc.innerHTML = (data[0].phrases.goodhands);
    
    // phone.innerHTML = data[0].info.phone;
    for (let i = 0; i < phone.length; i++) {
        //  geoc[i].innerHTML = data[0].phrases.goodhands;
        // geoc[i].innerHTML = buildSentence(data[0].phrases.goodhands, data[0].info.phone);
        phone[i].innerHTML = data[0].info.phone;

    }

    // geoc[2].innerHTML = (data[0].phrases.goodhands);
    
    // phone.innerHTML = (data[0].info.phone);
});





// function buildSentence (phrase, variable) {

//     // let p = JSON.stringify(phrase);



//     return variable;
// }
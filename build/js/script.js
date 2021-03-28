

(function(){
    'use strict';
  
    document.addEventListener('DOMContentLoaded', function() {
      var cy = document.getElementById('current-year');
      var date = new Date();
      var year = date.getFullYear();
      cy.innerHTML = year;
    });
  
  })();



  

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
        "phone": "+1(630)776-1907",
        "email": "plumber@ironplumber.net"
    }
   
}
];
    
document.addEventListener('DOMContentLoaded', function() {

    var phone = document.querySelectorAll('.wrapper #phone');

    for (let i = 0; i < phone.length; i++) {
        phone[i].innerHTML = data[0].info.phone;
    }

    //tel link
    var telLink = document.querySelectorAll('.wrapper #tel-link');
    document.querySelectorAll('.wrapper #tel-link').innerHTML = "Phone is: ";

    for (let i = 0; i < telLink.length; i++) {
        telLink[i].innerHTML =  '<a href=tel:"'+ cleanPhoneNumber(data[0].info.phone) +'">'+ formatPhoneNumber(data[0].info.phone) + '</a>  ';
    }

    var email = document.querySelectorAll('.wrapper #email');
    for (let i = 0; i < email.length; i++) {
         email[i].innerHTML = data[0].info.email;
    }
    var emailLink = document.querySelectorAll('.wrapper #email-link');
    for (let i = 0; i < emailLink.length; i++) {
        emailLink[i].innerHTML = '<a href=mailto:"'+ data[0].info.email +'">'+ "Email Us" + '</a> ';
    }

});

let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    console.log(cleaned);
    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    console.log(match);
    if (match) {

      let intlCode = (match[1] ? '+1 ' : '')
      return ['(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    
    return null;
  }

  let cleanPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    console.log(cleaned);
    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    console.log(match);
    if (match) {

      let intlCode = (match[1] ? '+1' : '')
      return [intlCode, match[2],  match[3], match[4]].join('')
    }
    
    return null;
  }
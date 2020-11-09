
/*
===========
navbar
===========    
*/

//----- toggle navbar -----
let btnToggler = document.querySelector(".btn-toggler");
let navbarNav = document.querySelector(".navbar-nav");
btnToggler.addEventListener("click", () => {
    navbarNav.classList.toggle("show")
})

//------- fixed navbar -------
let navbar = document.querySelector('.navbar')

window.addEventListener("scroll", () => {
   let navbarHeight = navbar.getBoundingClientRect().height
   let scrollHeight = window.pageYOffset

   if (scrollHeight > navbarHeight) {
       navbar.classList.add("fixed");
   }else{
       navbar.classList.remove("fixed")
   }
})

//------ smoth scroll  ------
let scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach( links => {
    links.addEventListener('click', (e) => {
        // prevent default
        e.preventDefault()
        // select element
        id = e.target.getAttribute("href").slice(1);
        element = document.getElementById(id);
        
        window.scrollTo({
            left:0,
            top: element.offsetTop + 1,
        })

        navbarNav.classList.remove('show')
    })
})

//------ add class active on scroll ------
window.addEventListener("scroll", () => {
    var scrollH = window.pageYOffset;
    
    var home = document.getElementById("home");
    var feature = document.getElementById("feature");
    var view = document.getElementById("view");
    var form = document.getElementById("form")
    var screens = document.getElementById("screens")
    
    if (pageYOffset > home.offsetTop) {
        scrollLinks.forEach( (li, index) => {
            li.classList.remove("active")
        })
        document.querySelector(".home").classList.add("active")
    }
    if (pageYOffset > feature.offsetTop) {
        scrollLinks.forEach( (li, index) => {
            li.classList.remove("active")
        })
        document.querySelector(".feature").classList.add("active")
    }
    if (pageYOffset > view.offsetTop) {
        scrollLinks.forEach( (li, index) => {
            li.classList.remove("active")
        })
        document.querySelector(".view").classList.add("active")
    }
    if (pageYOffset > screens.offsetTop) {
        scrollLinks.forEach( (li, index) => {
            li.classList.remove("active")
        })
        document.querySelector(".screens").classList.add("active")
    }
    if (pageYOffset > form.offsetTop) {
        scrollLinks.forEach( (li, index) => {
            li.classList.remove("active")
        })
        document.querySelector(".form").classList.add("active")
    }

})

/*
======================  
    word slider
======================    
*/

var words = ["desingers", "developers", "markting"]
var current = 0

function wordSlider() {
    // select element
    var text = document.querySelector(".changed-text");

    // if current less than words array
    if (current < words.length) {
        text.innerHTML = words[current];
        current++
        text.classList.add("active")
    } else{
        current = 0;
        text.innerHTML = words[current];
        text.classList.add("active")
    }
} 
setInterval(wordSlider, 2000);

/*
================
slider card
================
*/
var teamItem = document.querySelectorAll('.team-item');
var right = document.querySelector('.right-icon');
var left = document.querySelector('.left-icon');
var teamContainer = document.querySelector(".team-container");

var currentSlider = 0;
var duration = 3000;
var animation;

// right button
right.addEventListener('click', ()=> {
    next(teamItem)
})

// left button
left.addEventListener('click', ()=> {
    prev(teamItem);
})

// next slide
function next(ele) {
    // incress current slider
    currentSlider++;
    // if current bigger than 3
    if (currentSlider > 3) {
        currentSlider = 0 
    }
    // make transform to all div team item
    ele.forEach(box => {
        var size = box.clientWidth;
        box.style.transform = `translate(${-size * currentSlider}px)`;
    })
}

// prev slide
function prev(element) {
    // decresse current slider
    currentSlider--;
    // check if current slider bigger than 1
    if (currentSlider < 0) {
        currentSlider = 3
    } 
    element.forEach(box => {
        var size = box.clientWidth;
        box.style.transform = `translate(${-size * currentSlider}px)`;
    })
}

// animation slider
function startSlide() {
    animation = setInterval(function() {
        next(teamItem)
    }, duration)
}
startSlide()


// stop on hover 
teamContainer.addEventListener("mouseenter", () => {clearInterval(animation)})

// play on leave hover
teamContainer.addEventListener("mouseleave", startSlide)

/* 
=================
start feature
=================
*/

var tabItem = document.querySelectorAll(".tab-item");
var featContainer = document.querySelectorAll(".features .flex-row");

tabItem.forEach(item => {
    item.addEventListener("click", (e) => {
        // remove class active and add to an select element
        document.querySelectorAll(".tab-item").forEach(rem => {
            rem.classList.remove('active')
        }) 
        e.target.classList.add("active")

        // remove class form all featContainer
        featContainer.forEach(element => {
            element.classList.remove('show')
            element.classList.add('hide')
        });
        // select all featContainer elemnet
        document.querySelector(e.target.dataset.target).classList.add("show")
    })
})

/*
===============
create modal 
===============
*/

// select element
var modalBox = document.querySelector(".modal");
var modalBtn = document.querySelector('.btn-pop');
var modalClose = document.querySelector('.modal-close');
var vid = document.getElementById("vid")
console.log(vid)

// toggle class active
function modal(ele) {
    ele.classList.toggle("active");
    
}
modalBtn.addEventListener("click", () => {
    modal(modalBox);
    vid.src="https://www.youtube.com/embed/fLCjQJCekTs?autoplay=1";
})

// remove class active
function fadeOut(close) {
    close.classList.remove('active');
}
modalClose.addEventListener('click', () => {
    fadeOut(modalBox);
    vid.src="";
    console.log(vid)
})

// remove class all active when clicking Esc on keyboard
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        modalBox.classList.remove('active');
        document.querySelector(".rotateTop").classList.remove('active')
        document.querySelector('.modal-dialog').classList.remove('active');
        document.body.style.overflowY = "auto";
        document.querySelector(".rotate-bottom").classList.remove('active')
        document.querySelector('.dialog-2').classList.remove('active');
    }
})


/*
===================
create modal rotate
===================
*/

// select element modal
var rotateH = document.querySelector('.rotateTop');
var rotateB = document.querySelector(".rotate-bottom");
// select element dialog
var dialogs = document.querySelector('.modal-dialog');
var dialogTwo = document.querySelector('.dialog-2');


// add event click to boutton 
document.querySelector(".btn-rotate").addEventListener('click', (e)=>{
    rotateModal(e, rotateH, dialogs);
})
document.querySelector(".btn-rotate-bottom").addEventListener('click', (e) => {
    rotateModal(e, rotateB, dialogTwo)
})
// close pop up 
document.querySelectorAll(".popup-close").forEach(x =>{
    x.addEventListener("click", close => {
        document.querySelector(".rotateTop").classList.remove('active')
        document.querySelector(".rotate-bottom").classList.remove('active')
        document.querySelector('.modal-dialog').classList.remove('active');
        document.querySelector('.dialog-2').classList.remove('active');
        document.body.style.overflowY = "auto"  
    })
})

// show popup 
function rotateModal(e, modal, dialog) {
    e.preventDefault();
    e.stopPropagation();
    modal.classList.add('active');
    dialog.classList.add('active');
    document.body.style.overflowY = "hidden";
    modal.classList.add('scroll');
}

/*  
**************  counter  **************
*/
const counters = document.querySelectorAll('.count-up');
const main = document.querySelector('.counter');


const speed = 400; // The lower the slower

window.onscroll = function () {
 
    if (scrollY > main.offsetTop - this.innerHeight) {
        counters.forEach(counter => {
            const updateCount = () => {
    
    
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
            
                    // Lower inc to slow and higher to slow
                    const inc = target / speed;
            
                    // console.log(inc);
                    // console.log(count);
            
                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = Math.round(count + inc);
                        // Call function every ms
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
            
                    updateCount();
    
                
        
        });
    }
    
}


/* *******************    screen    ******************* */

var screenLeft = document.querySelector(".screen-left");
var screenItem = document.querySelectorAll(".screen-item");
var screenSlider = 0;
var animationScreen;

// right button
document.querySelector('.screen-right').addEventListener('click', ()=> {
    nextSlider(screenItem)
})

// left button
screenLeft.addEventListener('click', ()=> {
    prevSlider(screenItem);
})

// nextSlider function 
function nextSlider(ele) {
    // incress current slider
    screenSlider++;
    // if current less than 3
    if (screenSlider > 5) {
        screenSlider = 0 
    }
    // make transform to all div team item
    ele.forEach(box => {
        var size = box.clientWidth;
        box.style.transform = `translate(${-size * screenSlider}px)`;
    })
}

// prevSlider function
function prevSlider(element) {
    screenSlider--;
    if (screenSlider < 0) {
        screenSlider = 5
    } 
    element.forEach(box => {
        var size = box.clientWidth;
        box.style.transform = `translate(${-size * screenSlider}px)`;
    })
}

// animation slider
function startScreen() {
    animationScreen = setInterval(function() {
        nextSlider(screenItem)
    }, duration)
}
startScreen()

/*********  for vedio  ********/

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

/*
===========
preloader
===========    
*/
let preloader = document.querySelector('.preloader');
window.addEventListener("load", ()=> {
  preloader.classList.add("hide-preloader");
    
})
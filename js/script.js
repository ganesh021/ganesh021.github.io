// to set text for auto typing
var typed = new Typed(".auto-text-generator", {
    strings: ["Ganesh Patil", "Developer", "Engineer", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


// For Smooth transition of anchor tags - while navigating form navigation bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// to use wow in html class - to enable animation only when element is loaded on screen  
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();

// Lode more - certifications
function loadMore() {

    // Hide-Unhide Certificates details
    var x = document.getElementsByClassName("view-more-certificates");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }

    // Toggle between View More & View Less Button
    var viewMoreBtn = document.getElementById("view-more-btn");
    var viewLessBtn = document.getElementById("view-less-btn");
    if(viewLessBtn.style.display === "none"){
        viewMoreBtn.style.display = "none";
        viewLessBtn.style.display = "block"
    }
    else{
        viewMoreBtn.style.display = "block";
        viewLessBtn.style.display = "none"
    }
}

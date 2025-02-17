/*!
* Start Bootstrap - Resume v6.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav"
    });
document.addEventListener("DOMContentLoaded", function () {
    var profileImage = document.getElementById("profileImage");
    var modal = document.createElement("div");
    modal.id = "imagePopup";
    modal.classList.add("popup");

    // Create modal content
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="popup-content" id="popupImage">
    `;
    document.body.appendChild(modal);

    var popupImage = document.getElementById("popupImage");
    var closeButton = modal.querySelector(".close");

    // Open modal on image click
    profileImage.addEventListener("click", function () {
        popupImage.src = this.src;
        modal.style.display = "block";
    });

    // Close modal when clicking close button
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

})(jQuery); // End of use strict

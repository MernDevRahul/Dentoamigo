
document.addEventListener("DOMContentLoaded", function () {
    let scrollHeader = document.querySelector(".scroll-js-header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            scrollHeader.classList.add("bg-primary");
        } else {
            scrollHeader.classList.remove("bg-primary");
        }
    });
    const navbarElem = document.querySelector(".navbar-expand-lg")
    const toggleBtn = document.querySelector(".navbar-toggler");
    toggleBtn.addEventListener("click", function () {
        navbarElem.classList.toggle("bg-primary")
    })
    // Auto Year Updated
    const yearUpd = document.querySelector("#yearUpdate");
    const newYearDate = new Date().getFullYear();
    yearUpd.innerText = newYearDate;

})
// start Slider
$(function () {
    $('#compareSlider').owlCarousel({
        loop: true,
        margin: 16,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })

    // start testmonials

    $('#testimonailSlider').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
})


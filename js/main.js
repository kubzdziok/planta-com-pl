const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

function loaderFadeOut() {
    $(window).on('load', function () {

        $(".loader-wrapper").fadeOut();
    });
}

function loadOwlCarousele() {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel(
            {
                loop: false,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    350: {
                        items: 2
                    },
                    550: {
                        items: 3
                    },
                    900: {
                        items: 4
                    },
                    1024: {
                        items: 5
                    }
                }
            }
        );
    });
}

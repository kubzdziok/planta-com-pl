const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

async function copyToClipboard(copyElementId, tooltipId) {
    try {
        let textToCopy = document.getElementById(copyElementId).innerHTML;
        let tooltipSpan = document.getElementById(tooltipId);
        await navigator.clipboard.writeText(textToCopy);
        setTimeout(function () {
            tooltipSpan.classList.toggle("active")
        }, 1200)
        tooltipSpan.classList.toggle("active");
    } catch (err) {
        console.error('Nie można skopiować: ', err);
    }
}

function loaderFadeOut() {

    function fadeTimeout() {
        $(".loader-wrapper").fadeOut();
    }

    $(window).on('load', function () {
        setTimeout(fadeTimeout, 400)
    })
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

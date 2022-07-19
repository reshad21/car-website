// ========== booknow owlcarousel ========== //
function booknow() {
    $('.booknow').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}
booknow();


// ============== topber section code ============= //
function topber() {
    const topMenu = document.querySelector("#topMenu");
    window.addEventListener("scroll", () => {
        let scrollValue = Math.ceil(scrollY);
        console.log(scrollValue);
        if (scrollValue >= 77) {
            topMenu.classList.add("active");
        } else {
            topMenu.classList.remove("active");
        }
    })
}
topber();


// ============ responsiveNavber code ============= //
function responsiveNavber() {
    const responsiveNavber = document.querySelector("#responsiveNavber");
    let body = document.querySelector("#body");
    window.addEventListener("scroll", () => {
        let scrollValue = Math.ceil(scrollY);
        if (scrollValue >= 96) {
            responsiveNavber.classList.add("show");
        } else {
            responsiveNavber.classList.remove("show");
        }
    })
}
responsiveNavber();

// ========= mbnavber & scroll effect hide ========= //
function mbnavber() {
    const mbbarIcon = document.querySelector("#mbbarIcon");
    const resCanvas = document.querySelector("#resCanvas");
    const body = document.querySelector("#body");
    mbbarIcon.addEventListener('click', (e) => {
        e.preventDefault();
        resCanvas.classList.add("active");
        body.classList.add("scrollbar");
    });
    const crossIcon = document.querySelector("#crossIcon");
    crossIcon.addEventListener('click', (e) => {
        e.preventDefault();
        resCanvas.classList.remove("active");
        body.classList.remove("scrollbar");
    })
}
mbnavber();


// ========== cargallery ========== //
function cargallery() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}
cargallery();
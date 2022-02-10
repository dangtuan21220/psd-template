// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// menu-toggle
const menuToggle = document.querySelector(".menu-toggle");
const headerMenu = document.querySelector(".header-menu");
menuToggle.addEventListener("click", function () {
    headerMenu.classList.add("is-expand");
});
window.addEventListener("click", function (e) {
    if (!e.target.matches(".menu-toggle") && !headerMenu.contains(e.target)) {
        headerMenu.classList.remove("is-expand");
    }
});

// slick slider
$(document).ready(function () {
    $(".quote-container").slick({
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
});

// accordion
const wedoItemHeaders = document.querySelectorAll(".wedo-item__header");
const wedoItems = document.querySelectorAll(".wedo-item");
function handleClickWedoHeader(e) {
    const arrow = e.target.querySelector(".wedo-item__arrow");
    // [...wedoItems].forEach(item => {
    //     if(!item.classList.contains(e.target)) {
    //         item.classList.remove("is-active")
    //     }
    // });
    const wedoItem = e.target.parentElement;
    // console.log(wedoItem);
    wedoItem.classList.toggle("is-active");
    arrow.classList.toggle("fa-angle-down");
    arrow.classList.toggle("fa-angle-up");
}
[...wedoItemHeaders].forEach((item) =>
    item.addEventListener("click", handleClickWedoHeader)
);

// header bottom tab change bg
const header = document.querySelector(".header");
const headerBottomItems = document.querySelectorAll(".header-bottom__item");
[...headerBottomItems].forEach((item) =>
    item.addEventListener("click", function (e) {
        [...headerBottomItems].forEach((el) =>
            el.classList.remove("is-active")
        );
        // lấy giá trị data-bg
        const numberBg = e.target.dataset.bg;
        e.target.classList.add("is-active");
        header.style.backgroundImage = `linear-gradient(rgba(233, 131, 131, 0.95), rgba(238, 214, 137, 0.85)), url("../../images/header_bg${numberBg}.jpg")`;
    })
);

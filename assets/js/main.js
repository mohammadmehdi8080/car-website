const toggleBtn = document.querySelector("#toggle");
const navList = document.querySelector(".nav__list");
const closeBtn = document.querySelector("#close");

toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    closeBtn.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
    navList.classList.remove("open");
    closeBtn.classList.remove("open");
});

const swiper = new Swiper(".home__swiper", {
    loop: true,                // چرخش بی‌نهایت
    slidesPerView: 1,          // تعداد اسلایدهای قابل نمایش
    spaceBetween: 0,           // فاصله بین اسلایدها
    autoplay: {                // حرکت خودکار
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {              // صفحه‌بندی
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",            // افکت انتقال (fade برای یک اسلاید)
    fadeEffect: {
        crossFade: true
    },
    speed: 600,                // سرعت انیمیشن
});

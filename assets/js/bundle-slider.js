/* ============================================
    BUNDLE COURSES SLIDER
    Swiper 11. Carries all of a bundle's courses in one row.
    Hooks: data-lf-bundle-slider on the wrapper,
           data-lf-bundle-prev / -next on the arrows.
============================================ */

(() => {
    document.querySelectorAll('[data-lf-bundle-slider]').forEach((wrap) => {
        const el = wrap.querySelector('.swiper');
        if (!el || typeof Swiper === 'undefined') return;

        new Swiper(el, {
            slidesPerView: 1.2,
            spaceBetween: 14,
            navigation: {
                prevEl: wrap.querySelector('[data-lf-bundle-prev]'),
                nextEl: wrap.querySelector('[data-lf-bundle-next]'),
            },
            breakpoints: {
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
            },
        });
    });
})();

/* ============================================
    REVIEWS SLIDER
    Swiper 11. Used by the universal reviews section (lf-rev) on Home,
    Hot Deals, Single Course and Lifetime.
    Hooks: data-lf-rev on the wrapper, data-lf-rev-prev / -next on the
    arrow buttons. Card counts follow the design: 1 on mobile, 3 at lg.
============================================ */

(() => {
    document.querySelectorAll('[data-lf-rev]').forEach((wrap) => {
        const el = wrap.querySelector('.swiper');
        if (!el || typeof Swiper === 'undefined') return;

        new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
                prevEl: wrap.querySelector('[data-lf-rev-prev]'),
                nextEl: wrap.querySelector('[data-lf-rev-next]'),
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            },
        });
    });
})();

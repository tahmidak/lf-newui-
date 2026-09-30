/* ============================================
    ACCREDITATION STRIP
    Below lg the trust badges run as an auto-scrolling marquee that can
    still be swiped by hand; from lg the slider is torn down and the
    badges fall back into the CSS grid (accri.css).

    Swiper's loop clones the slides at runtime, so the markup keeps ONE
    badge per item and the theme dev writes a single loop.

    Hook: data-lf-accri on the .swiper element.
============================================ */

(() => {
    const BREAKPOINT = 992;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('[data-lf-accri]').forEach((el) => {
        let swiper = null;

        const build = () => {
            if (swiper || typeof Swiper === 'undefined') return;
            swiper = new Swiper(el, {
                slidesPerView: 'auto',
                spaceBetween: 14,
                loop: true,
                // A long duration with linear timing reads as a marquee
                speed: 4000,
                allowTouchMove: true,
                grabCursor: true,
                freeMode: { enabled: true, momentum: false },
                autoplay: reduced ? false : {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
            });
        };

        const teardown = () => {
            if (!swiper) return;
            // true, true — destroy the instance AND clean its inline styles,
            // otherwise the slide widths would fight the desktop grid.
            swiper.destroy(true, true);
            swiper = null;
        };

        const sync = () => {
            if (window.innerWidth < BREAKPOINT) build();
            else teardown();
        };

        let timer;
        window.addEventListener('resize', () => {
            clearTimeout(timer);
            timer = setTimeout(sync, 150);
        });

        sync();
    });
})();

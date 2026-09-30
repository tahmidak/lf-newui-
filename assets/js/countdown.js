/* ============================================
    OFFER COUNTDOWN
    Hot Deals hero. Hook: data-lf-countdown="<seconds>" on the element
    holding hh : mm : ss. Falls back to the markup's own value if JS is
    off, so the design's "12 : 12 : 12" still shows.
============================================ */

(() => {
    const pad = (n) => String(n).padStart(2, '0');

    document.querySelectorAll('[data-lf-countdown]').forEach((el) => {
        let left = parseInt(el.dataset.lfCountdown, 10);
        if (!Number.isFinite(left)) return;

        const tick = () => {
            const h = Math.floor(left / 3600);
            const m = Math.floor((left % 3600) / 60);
            const s = left % 60;
            el.textContent = `${pad(h)} : ${pad(m)} : ${pad(s)}`;
            if (left > 0) left -= 1;
        };

        tick();
        setInterval(tick, 1000);
    });
})();

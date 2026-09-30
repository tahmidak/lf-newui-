/* ============================================
    EXPAND / COLLAPSE BLOCK
    Clamps a block to a fixed height and reveals the rest on click —
    the course overview, the bundle overview, the category grid.

    Hooks (data-* only, never classes):
      data-lf-expand         on the wrapper
      data-lf-expand-body    the block being clamped
      data-lf-expand-toggle  the button

    The toggle only appears when the content is actually taller than the
    clamp, so a short course overview shows no button at all.
============================================ */

(() => {
    const setup = (wrap) => {
        const body = wrap.querySelector('[data-lf-expand-body]');
        const toggle = wrap.querySelector('[data-lf-expand-toggle]');
        if (!body || !toggle) return;

        const clamped = () => parseFloat(getComputedStyle(body).maxHeight) || 0;

        const measure = () => {
            const open = wrap.classList.contains('lf-expand-open');
            if (open) return;
            const more = body.scrollHeight > clamped() + 4;
            wrap.classList.toggle('lf-expand-more', more);
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const open = wrap.classList.toggle('lf-expand-open');
            toggle.setAttribute('aria-expanded', String(open));

            if (open) {
                body.style.maxHeight = `${body.scrollHeight}px`;
            } else {
                // Back to the clamp the stylesheet set
                body.style.maxHeight = '';
                body.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        });

        // Keep an open block sized to its content as things reflow
        let timer;
        window.addEventListener('resize', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (wrap.classList.contains('lf-expand-open')) {
                    body.style.maxHeight = `${body.scrollHeight}px`;
                } else {
                    measure();
                }
            }, 150);
        });

        measure();
    };

    document.querySelectorAll('[data-lf-expand]').forEach(setup);
})();

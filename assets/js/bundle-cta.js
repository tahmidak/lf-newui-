/* ============================================
    BUNDLE FLOATING CTA
    Shows the floating purchase card once every in-page CTA has scrolled
    out of view, and hides it again when one comes back — the behaviour
    from the reference build.

    Hooks: data-lf-cta-trigger on each in-page CTA,
           data-lf-cta on the floating card / phone bar.
============================================ */

(() => {
    const panels = document.querySelectorAll('[data-lf-cta]');
    const triggers = document.querySelectorAll('[data-lf-cta-trigger]');
    if (!panels.length || !triggers.length || !('IntersectionObserver' in window)) return;

    const visible = new Set();

    const paint = () => {
        panels.forEach((panel) => {
            const open = visible.size === 0;
            panel.classList.toggle('lf-sb-float-open', open && panel.dataset.lfCta === 'desktop');
            panel.classList.toggle('lf-sb-float-phone-open', open && panel.dataset.lfCta === 'phone');
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
        });
        paint();
    }, { threshold: 0.1 });

    triggers.forEach((t) => observer.observe(t));
})();

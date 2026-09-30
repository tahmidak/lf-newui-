/* ============================================
    LF — MAIN JS
    Shared behaviour, loaded on every page after Bootstrap's bundle.
    Hooks are data-* attributes only — never classes.
============================================ */

(() => {
    /* ---- Header: mobile menu ------------------------------------------
       The menu is a Bootstrap offcanvas (data-lf-header-menu). Two jobs
       Bootstrap doesn't do for us:
       1. Open it (and its backdrop) directly under the header bar instead
          of at the top of the viewport, via --lf-header-menu-top on the
          header (read in header.css).
       2. Keep the toggle's aria-expanded in sync — header.css uses it to
          swap the hamburger for a close icon. */
    document.querySelectorAll('[data-lf-header-menu]').forEach((menu) => {
        const header = menu.closest('[data-lf-header]');
        const toggles = document.querySelectorAll(`[data-bs-target="#${menu.id}"]`);
        const setExpanded = (value) => {
            toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', value));
        };

        menu.addEventListener('show.bs.offcanvas', () => {
            // Clamp at 0 so a header scrolled out of view opens the menu at the top.
            const top = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
            (header || menu).style.setProperty('--lf-header-menu-top', `${top}px`);
            setExpanded('true');
        });

        menu.addEventListener('hide.bs.offcanvas', () => setExpanded('false'));
    });
})();

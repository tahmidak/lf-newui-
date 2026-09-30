/* ============================================
    COURSE TOPICS (stand-in for Tutor LMS)
    The modules list uses Tutor LMS's own markup, so in WordPress
    tutor_course_topics() prints it and Tutor's script runs the open and
    close. This only reproduces that behaviour in the static template —
    the theme dev can drop this file once Tutor is doing the work.

    It matches Tutor's contract: .is-active on the header, and the body
    shown or hidden underneath it.
============================================ */

(() => {
    document.querySelectorAll('[data-lf-topics] .tutor-accordion-item-header').forEach((header) => {
        const body = header.nextElementSibling;
        if (!body || !body.classList.contains('tutor-accordion-item-body')) return;

        header.addEventListener('click', () => {
            const open = header.classList.toggle('is-active');
            body.style.display = open ? '' : 'none';
            header.setAttribute('aria-expanded', String(open));
        });
    });
})();

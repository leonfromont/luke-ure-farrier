// Luke Ure Farrier - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
        });

        // Close the menu after choosing a link
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Header shadow on scroll
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = function () {
            header.classList.toggle('scrolled', window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Smooth scroll for in-page anchors, offset for the fixed header
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const headerOffset = 76;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    // Optional GA4 conversion tracking. Only runs if gtag has been added to the pages.
    if (typeof gtag === 'function') {
        const linkLocation = function (el) {
            if (el.closest('header, nav')) return 'header';
            if (el.closest('footer')) return 'footer';
            return 'body';
        };
        document.addEventListener('click', function (e) {
            const link = e.target.closest('a[href]');
            if (!link) return;
            const href = link.getAttribute('href') || '';
            const payload = {
                link_location: linkLocation(link),
                link_text: (link.textContent || '').trim().slice(0, 60)
            };
            if (href.startsWith('tel:')) gtag('event', 'phone_click', payload);
            else if (href.startsWith('sms:')) gtag('event', 'sms_click', payload);
            else if (href.startsWith('mailto:')) gtag('event', 'email_click', payload);
        });
    }
});

(function () {
    const header = document.querySelector('.site-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navigation = document.getElementById('primary-navigation');

    const closeNavigation = () => {
        if (!navigation) return;
        navigation.classList.remove('is-open');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    };

    if (navToggle && navigation) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navigation.classList.toggle('is-open');
        });

        navigation.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeNavigation();
            });
        });
    }

    const handleHeaderState = () => {
        if (!header) return;
        if (window.scrollY > 12) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleHeaderState();
    window.addEventListener('scroll', handleHeaderState, { passive: true });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.15
        });

        document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    } else {
        document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('is-visible'));
    }

    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                const originalText = button.innerHTML;
                button.disabled = true;
                button.innerHTML = '<i class="fa-solid fa-check"></i> 已记录，感谢关注！';
                setTimeout(() => {
                    button.disabled = false;
                    button.innerHTML = originalText;
                }, 3200);
            }
        });
    });
})();

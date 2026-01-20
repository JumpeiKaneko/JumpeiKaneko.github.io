document.addEventListener('DOMContentLoaded', () => {
    
    // --- ヘッダーの背景効果 ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('header-blur');
            } else {
                header.classList.remove('header-blur');
            }
        });
    }

    // --- スクロールフェードイン ---
    const faders = document.querySelectorAll('.fade-in-section');
    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // --- モバイルメニュー ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        // メニューの中身を動的に生成
        const mainNav = document.querySelector('.main-nav');
        if (mainNav) {
            mobileMenu.innerHTML = mainNav.innerHTML;
        }

        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('is-open');
            if (isOpen) {
                mobileMenu.classList.remove('is-open');
                menuBtn.textContent = 'MENU';
            } else {
                mobileMenu.classList.add('is-open');
                menuBtn.textContent = 'CLOSE';
            }
        });
    }

    // --- フッターの年 ---
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

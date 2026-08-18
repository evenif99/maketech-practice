function initLanguageSelector() {
    const languageSelector = document.querySelector(".language-selector");
    const languageButton = document.querySelector(".language-button");
    const languageCurrent = document.querySelector(".language-current");
    const languageOptions = document.querySelectorAll(".language-option");

    if (!languageSelector || !languageButton || !languageCurrent) return;

    languageButton.addEventListener("click", () => {
        languageSelector.classList.toggle("is-open");

        const isOpen = languageSelector.classList.contains("is-open");

        languageButton.setAttribute("aria-expanded", String(isOpen));
    });

    languageOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const selectedLanguage = option.dataset.lang;

            languageCurrent.textContent = selectedLanguage;

            languageSelector.classList.remove("is-open");

            languageButton.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        if (!languageSelector.contains(event.target)) {
            languageSelector.classList.remove("is-open");

            languageButton.setAttribute("aria-expanded", "false");
        }
    });
}

function initTopButton() {
    const topButton = document.querySelector(".top-button");

    if (!topButton) return;

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

function initFloatingMenu() {
    const floatingButtons = document.querySelector(".floating-buttons");
    const consultationButton = document.querySelector(".consultation-button");

    if (!floatingButtons || !consultationButton) return;

    consultationButton.addEventListener("click", () => {
        const isOpen = floatingButtons.classList.toggle("is-open");

        consultationButton.setAttribute("aria-expanded", String(isOpen));
    });
}

function initCounter() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
        const start = Number(counter.dataset.start);
        const target = Number(counter.dataset.target);

        const suffix = counter.textContent.replace(/[\d,]/g, "");

        let current = start;

        const duration = 2000;
        const interval = 20;
        const step = (target - start) / (duration / interval);

        const timer = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = Math.floor(current).toLocaleString() + suffix;
        }, interval);
    });
}

function initAboutAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".company-section",
            start: "top 75%",
            once: true,
        },
    });

    timeline
        .from(".company-label", {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: "power3.out",
        })

        .from(
            ".company-title",
            {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.4",
        )

        .from(
            ".company-description",
            {
                opacity: 0,
                y: 40,
                duration: 0.7,
                ease: "power3.out",
            },
            "-=0.5",
        )

        .from(
            ".stat-item",
            {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            },
            "-=0.3",
        );
}

function initProcessAnimation() {
    gsap.from(".process-inner", {
        scrollTrigger: {
            trigger: ".process-section",
            start: "top 75%",
            once: true,
        },

        opacity: 0,
        y: 50,

        duration: 0.8,
        ease: "power3.out",
    });
}

function initSolutionSwipers() {
    const rows = document.querySelectorAll(".solution-row");

    if (!rows.length) return;

    rows.forEach((row) => {
        const swiperEl = row.querySelector(".solution-swiper");
        const prevEl = row.querySelector(".solution-nav-prev");
        const nextEl = row.querySelector(".solution-nav-next");

        if (!swiperEl) return;

        const isReversed = row.classList.contains("solution-row--reverse");

        if (isReversed) {
            swiperEl.setAttribute("dir", "rtl"); // Swiper 초기화 전에 속성으로 지정
        }

        new Swiper(swiperEl, {
            slidesPerView: "auto",
            spaceBetween: 20,
            grabCursor: true,
            navigation: {
                prevEl,
                nextEl,
            },
        });
    });
}

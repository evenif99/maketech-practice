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

        const finalText = target.toLocaleString() + suffix;
        counter.style.minWidth = finalText.length + "ch";

        let current = start;

        const duration = 3000;
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
        const slideCount = swiperEl.querySelectorAll(".swiper-slide").length;

        const pauseAllVideos = (swiper) => {
            swiper.slides.forEach((slide) => {
                const video = slide.querySelector("video");

                if (!video) return;

                slide.classList.add("is-inactive");
                video.pause();
            });
        };

        const playActiveVideo = (swiper) => {
            swiper.slides.forEach((slide, index) => {
                const video = slide.querySelector("video");

                if (!video) return;

                if (index === swiper.activeIndex) {
                    slide.classList.remove("is-inactive");
                    video.play().catch(() => {});
                } else {
                    slide.classList.add("is-inactive");
                    video.pause();
                }
            });
        };

        new Swiper(swiperEl, {
            slidesPerView: 1.5,
            spaceBetween: 20,
            grabCursor: true,
            speed: 3000,
            initialSlide: isReversed ? slideCount - 1 : 0,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,

            navigation: {
                prevEl,
                nextEl,
            },
            on: {
                init(swiper) {
                    playActiveVideo(swiper);
                },
                slideChange(swiper) {
                    pauseAllVideos(swiper);
                },
                slideChangeTransitionEnd(swiper) {
                    playActiveVideo(swiper);
                },
            },
        });
    });
}

function initFollowupAnimation() {
    gsap.from(".followup-inner", {
        scrollTrigger: {
            trigger: ".followup-section",
            start: "top 75%",
            once: true,
        },

        opacity: 0,
        y: 50,

        duration: 0.8,
        ease: "power3.out",
    });
}

function initClientsAnimation() {
    gsap.from(".clients-heading", {
        scrollTrigger: {
            trigger: ".clients-section",
            start: "top 75%",
            once: true,
        },

        opacity: 0,
        y: 50,

        duration: 0.8,
        ease: "power3.out",
    });
}

function initSolutionOverviewAnimation() {
    const rows = gsap.utils.toArray(".solution-row");

    rows.forEach((row) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                once: true,
            },

            opacity: 0,
            y: 60,

            duration: 0.8,
            ease: "power3.out",
        });
    });
}

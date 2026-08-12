function initLanguageSelector() {
    const languageSelector = document.querySelector(".language-selector");
    const languageButton = document.querySelector(".language-button");
    const languageCurrent = document.querySelector(".language-current");
    const languageOptions = document.querySelectorAll(".language-option");

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

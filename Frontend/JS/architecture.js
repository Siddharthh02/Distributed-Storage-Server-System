(function applyTheme() {
    const storedTheme = localStorage.getItem("cloudvault-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.body.setAttribute("data-theme", "dark");
    }

    window.addEventListener("storage", function (event) {
        if (event.key === "cloudvault-theme") {
            if (event.newValue === "dark") {
                document.body.setAttribute("data-theme", "dark");
            } else {
                document.body.removeAttribute("data-theme");
            }
        }
    });
})();

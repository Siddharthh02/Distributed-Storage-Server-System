const uploadForm = document.getElementById("uploadForm");
const statusElement = document.getElementById("status");
const fileListBody = document.getElementById("fileList");
const emptyState = document.getElementById("emptyState");
const metricCount = document.getElementById("metricCount");
const metricSync = document.getElementById("metricSync");
const themeToggle = document.getElementById("themeToggle");

initializeTheme();

uploadForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    statusElement.textContent = "Uploading...";

    fetch("upload.php", {
        method: "POST",
        body: formData
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (message) {
            statusElement.textContent = message;
            statusElement.style.color = "#1d7b45";
            loadFiles();
        })
        .catch(function () {
            statusElement.textContent = "Upload failed. Please try again.";
            statusElement.style.color = "#d92d20";
        });
});

function loadFiles() {
    fetch("files.php")
        .then(function (response) {
            return response.json();
        })
        .then(function (files) {
            fileListBody.innerHTML = "";
            metricCount.textContent = Array.isArray(files) ? String(files.length) : "0";
            metricSync.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

            if (!Array.isArray(files) || files.length === 0) {
                emptyState.hidden = false;
                return;
            }

            emptyState.hidden = true;

            files.forEach(function (file) {
                const row = document.createElement("tr");

                row.innerHTML = ""
                    + "<td><span class=\"file-pill\">📄 " + escapeHtml(file) + "</span></td>"
                    + "<td>"
                    + "<button class=\"btn-inline download-btn\" onclick=\"downloadFile('" + jsSafeString(file) + "')\">Download</button>"
                    + "<button class=\"btn-inline delete-btn\" onclick=\"deleteFile('" + jsSafeString(file) + "')\">Delete</button>"
                    + "</td>";

                fileListBody.appendChild(row);
            });
        })
        .catch(function () {
            emptyState.hidden = false;
            emptyState.textContent = "Unable to fetch files right now.";
            metricSync.textContent = "Offline";
        });
}

function initializeTheme() {
    const storedTheme = localStorage.getItem("cloudvault-theme");
    if (storedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", function () {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.body.removeAttribute("data-theme");
            themeToggle.textContent = "Dark Mode";
            localStorage.setItem("cloudvault-theme", "light");
            return;
        }

        document.body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "Light Mode";
        localStorage.setItem("cloudvault-theme", "dark");
    });
}

function downloadFile(name) {
    window.location.href = "download.php?file=" + encodeURIComponent(name);
}

function deleteFile(name) {
    fetch("delete.php?file=" + encodeURIComponent(name))
        .then(function () {
            loadFiles();
        });
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function jsSafeString(text) {
    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}

setInterval(loadFiles, 3000);
loadFiles();

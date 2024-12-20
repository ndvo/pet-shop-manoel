function loadComponent(url, placeholderId) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`This page could not be loaded ${url}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading this page ${url}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("components/header.html", "header-placeholder");
    loadComponent("components/footer.html", "footer-placeholder");
});
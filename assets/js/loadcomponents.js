function loadComponent(url, placeholderId) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Não foi possível carregar ${url}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar ${url}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("components/header.html", "header-placeholder");
    loadComponent("components/footer.html", "footer-placeholder");
});
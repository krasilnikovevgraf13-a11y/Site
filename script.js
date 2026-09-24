function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Страница не найдена: " + page);
            }

            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const html = parser.parseFromString(data, "text/html");

            const newContent = html.querySelector("#content");
            const currentContent = document.querySelector("#content");

            if (!newContent || !currentContent) {
                console.error("Не найден блок #content");
                return;
            }

            // Стираем старую информацию
            currentContent.innerHTML = "";

            // Показываем новую
            currentContent.innerHTML = newContent.innerHTML;
        })
        .catch(error => {
            console.error(error);
        });
}


// Вернуться на главную
function goHome() {
    loadPage("index.html");
}
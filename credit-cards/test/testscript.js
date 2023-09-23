    document.querySelector(".logo").addEventListener("click", function(e) {
        e.preventDefault(); // Verhindert, dass der Link die Seite verlässt
        history.back(); // Führt die Zurück-Funktion aus
    });

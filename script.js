// Esperamos a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Obtenemos los elementos que necesitamos
    const cardContainer = document.getElementById('cardContainer');
    const giftButton = document.getElementById('giftButton');
    const cardInside = document.getElementById('cardInside');
    const videoPlayer = document.getElementById('video-ardilla'); // Ahora es un <video>

    // --- LÓGICA DE APARICIÓN (4 segundos) ---
    setTimeout(() => {
        cardContainer.classList.add('visible');
    }, 4000); // 4000 milisegundos = 4 segundos


    // --- LÓGICA DE GIRO (Actualizada) ---

    // 1. ABRIR la tarjeta (Solo al hacer clic en el ícono)
    giftButton.addEventListener('click', function(event) {
        // Detenemos la propagación para que no se active el clic del "cardInside"
        event.stopPropagation(); 
        cardContainer.classList.add('open');
    });

    // 2. CERRAR la tarjeta (Al hacer clic en cualquier parte del interior)
    cardInside.addEventListener('click', function() {
        if (cardContainer.classList.contains('open')) {
            cardContainer.classList.remove('open');
            
            // Detenemos y reiniciamos el video local
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    });

    // 3. Detener la propagación del clic en el video
    // (Evita que la tarjeta se cierre si el usuario solo quiere pausar el video)
    videoPlayer.addEventListener('click', function(event) {
        event.stopPropagation();
    });

});
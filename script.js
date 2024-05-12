document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    const envelope = document.querySelector('.envelope');
    const text = document.querySelector('.textito'); // Cambié el nombre de la clase a 'textito'

    function cambiarColores() {
        const randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
        text.style.borderColor = randomColor1;
        text.style.textDecorationColor = randomColor2;
    }

    let contador = 0;
    const intervalo = setInterval(() => {
        if (contador >= 40) {
            clearInterval(intervalo);
        } else {
            cambiarColores();
            contador++;
        }
    }, 1000); // Cambiar cada segundo

    envelope.addEventListener('click', function () {
        card.style.top = '-100px';
        setTimeout(() => {
            text.classList.toggle('hidden');
        }, 500);
    });
});
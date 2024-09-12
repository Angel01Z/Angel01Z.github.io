document.addEventListener('DOMContentLoaded', function() {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');
    const colores = ['#f4f4f4', '#e6f3ff', '#fff0e6', '#e6ffe6', '#ffe6e6'];
    let colorActual = 0;

    cambiarColorBtn.addEventListener('click', function() {
        colorActual = (colorActual + 1) % colores.length;
        document.body.style.backgroundColor = colores[colorActual];
    });
});
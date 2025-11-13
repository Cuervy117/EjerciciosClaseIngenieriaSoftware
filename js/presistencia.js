let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

const carritoLista = document.getElementById('carritoLista');

function renderCarrito() {
    carritoLista.innerHTML = '';
    carrito.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        carritoLista.appendChild(li);
    });

}

if (carrito.length > 0) {
    renderCarrito();
}

contenedor.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
        const nombre = e.target.parentElement.querySelector("h3").textContent;
        carrito.push(nombre);

        localStorage.setItem("Carrito", JSON.stringify(carrito));

        renderCarrito();
    }
});



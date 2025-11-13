let carrito = [];

const carritoLista = document.getElementById('carritoLista');

function renderCarrito() {
    carritoLista.innerHTML = '';
    carrito.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        carritoLista.appendChild(li);
    });

}

contenedor.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
        const nombre = e.target.parentElement.querySelector("h3").textContent;
        carrito.push(nombre);

        renderCarrito();
    }
});
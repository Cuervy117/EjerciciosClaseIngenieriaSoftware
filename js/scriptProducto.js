// Componente mejorado

const productos = [
    {nombre: "Elegant car", precio: 1, img: "https://i.pinimg.com/736x/f0/21/ec/f021ecfb624d5a2b8880791234c557cc.jpg"},
    {nombre: "Homeless car", precio: 10, img: "https://i.pinimg.com/736x/70/05/b7/7005b7ce730c2eebeb97e179a8e99a93.jpg"},
    {nombre: "Happy car", precio: 230, img: "https://i.pinimg.com/736x/08/c1/86/08c186a76345f45dab72cd1d54387a2a.jpg"},
    {nombre: "Genius car", precio: 500, img: "https://i.pinimg.com/736x/fd/c3/c7/fdc3c7dacd3c513f46b87707ab4e6556.jpg"}
]

const contenedor = document.getElementById("contenedor");

productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "card";    

    card.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar</button>
    `;
    contenedor.appendChild(card);
});
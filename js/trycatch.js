const form = document.getElementById('form');
const input = document.getElementById('nombre');
const msj = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    try{
        if(input.value.trim() === ''){
        throw new Error('El nombre no puede estar vacio');    
        }
        msj.textContent = `Bienvenido usuario: ${input.value} a sistema de inscripciones`;
        msj.style.color = 'green';
    }catch(error){
        msj.textContent = `Ocurrio un error: ${error.message}`;
        msj.style.color = 'red';
    }
    
});
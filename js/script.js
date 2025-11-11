const x =10;
console.log(x);

// iteraciones
const cielo = document.getElementById("cielo");

for(let i=0; i<5; i++){
    cielo.innerHTML += '⭐'
}

const planetas = ["🌍", "🪐", "🌕"]

for(const planeta of planetas){
    cielo.innerHTML += planeta;   
}

let m=0
while(m<5){
    cielo.innerHTML += '☁️';
    m++; 
}

let n=0;
do{
    cielo.innerHTML += '🚀'
    n++;
}while(n<4)

const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click", () => {
    cielo.innerHTML += '⭐';
});

// Doble click
const btnPlaneta = document.getElementById("btnPlaneta");

btnPlaneta.addEventListener("dblclick", () => {
    cielo.innerHTML += '🪐';
});

// input

const inputEmoji = document.getElementById("inputEmoji");
const btnAgregaEmoji = document.getElementById("btnAgregaEmoji");

btnAgregaEmoji.addEventListener("click", () => {
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo.innerHTML += emoji;
    inputEmoji.value = "";
});

inputEmoji.addEventListener("keydown", e => {
    if(e.key === "Escape") cielo.innerHTML = "";
});



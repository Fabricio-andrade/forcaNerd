const lista = ["espada", "carro", "livro", "tomada", "arvore", "biblioteca", "copo", "abelha", "alfabeto", "bingo"];
const palavraSecreta = lista[Math.floor(Math.random() * lista.length)];
const letrasErradas = [];
const letrasCertas = [];

document.addEventListener('keydown', (digito) => {
    const codigo = digito.keyCode;
    if (isLetra(codigo)) {
        const letra = digito.key;

        if (letrasErradas.includes(letra)) {
            avisoRepetida();
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCertas.push(letra);
            } else {
                letrasErradas.push(letra);
            }
        }
        atualizarJogo();
    }
})

function atualizarJogo() {
    mostrarLetrasCertas();
    mostrarLetrasErradas();
    vidas();
    checagem();
}

function mostrarLetrasCertas() {
    const divSecreta = document.querySelector(".secretaContainer");
    divSecreta.innerHTML = "";
    palavraSecreta.split("").forEach(letra => {
        if (letrasCertas.includes(letra)) {
            divSecreta.innerHTML += `<span>${letra}</span>`;
        } else {
            divSecreta.innerHTML += `<span>_</span>`;
        }
    })
}

function mostrarLetrasErradas() {
    const divErradas = document.querySelector(".erradasContainer");
    divErradas.innerHTML = "<h3>Letras Erradas</h3>";
    letrasErradas.forEach(letra => {
        divErradas.innerHTML += `<span>${letra}</span>`;
    });
}

function avisoRepetida() {
    const aviso = document.querySelector('.avisoRepetida');
    aviso.classList.add('mostrar');
    setTimeout(() => {
        aviso.classList.remove('mostrar');
    }, 1000);
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}
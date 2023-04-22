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
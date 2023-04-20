async function listaPalavras() {
    const response = await fetch('/listaNomes.json');
    const lista = await response.json();
    return lista;
}

listaPalavras().then(lista => {
    const tamanho = Object.keys(lista.lista).length;
    const campo = document.getElementById('palavra');
    let letra = document.getElementById('letra').value;
    let vidas = 5;

    function randomSort(a, b) {
        return Math.random() - 0.5;
    }

    document.getElementById('gerar').onclick = () => {
        
        lista.lista.sort(randomSort);
        let palavraNova = lista.lista[0].palavra;
        console.log(palavraNova.length);
    }

    document.getElementById('confirma').onclick = () => {
        
    }
})
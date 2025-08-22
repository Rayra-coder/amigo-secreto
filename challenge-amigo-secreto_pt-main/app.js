let listaAmigos = [];
let amigoSorteado = 'O amigo secreto sorteado é: ';

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == "") {
        alert('Por favor, insira um nome.');
    } else {
        listaAmigos.push(nome);
        atualizarLista();
        limparCampo();
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i]; 
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos != "") {
        let amigo = Math.floor(Math.random () * listaAmigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado + listaAmigos[amigo];
        limparLista();
    } else {
        alert('Adicione seus amigos!');
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

}
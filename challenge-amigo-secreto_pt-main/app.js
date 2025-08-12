// Criar uma array para armazenar os nomes
let nomes = [];
// Função para adicionar um nome à lista
function adicionarAmigo() {
    let Input = document.getElementById('amigo');
    let nome = Input.value.trim();
 // Verificar se o nome não está vazio 

    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }
    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    nomes.push(nome);
    atualizarListaAmigos();
    Input.value = '';
}

// Atualiza a lista de amigos
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    // Limpar a lista antes de atualizar
    lista.innerHTML = '';
    nomes.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo e remove da lista
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }

    let indice = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[indice];
    nomes.splice(indice, 1);
    atualizarListaAmigos();

    // Exibir o resultado do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 O amigo secreto é: <strong>${sorteado}</strong>!`;
    setTimeout(() => {
        resultado.innerHTML = '';
    }, 5000); // Limpa o resultado após 5 segundos

}

// Função para resetar o sorteio
function resetarSorteio() {
    nomes = [];
    atualizarListaAmigos();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    document.getElementById('amigo').value = '';
}
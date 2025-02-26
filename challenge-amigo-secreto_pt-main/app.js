let listaDeAmigos = [""];  
function atualizarListaAmigos() {
  // Seleciona a lista no HTML
  const lista = document.getElementById("listaAmigos");

  // Limpa a lista antes de adicionar novos elementos
  lista.innerHTML = "";

  // Percorre o array de amigos
  for (let amigo of amigos) {
      // Cria um novo elemento <li>
      const item = document.createElement("li");

      // Define o texto do <li> como o nome do amigo
      item.textContent = amigo;

      // Adiciona o <li> à lista
      lista.appendChild(item);
  }
}

function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const input = document.getElementById("amigo");
  const nomeAmigo = input.value.trim();

  // Valida a entrada
  if (nomeAmigo === "") {
      alert("Por favor, insira um nome.");
      return;
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nomeAmigo);

  // Atualiza a lista exibida
  atualizarListaAmigos();

  // Limpa o campo de entrada
  input.value = "";
}

function sortearAmigo() {
  // Verifica se há amigos na lista
  if (amigos.length === 0) {
      alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
      return;
  }

  // Gera um índice aleatório
  const indiceSorteado = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o resultado
  document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

// Exemplo de uso:
const amigos = [];
function exibirResultadoSorteio(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigo}</li>`;

}

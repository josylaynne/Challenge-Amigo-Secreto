Amigo Secreto - Gerenciador de Lista de Amigos

Descrição

Este projeto consiste em uma aplicação simples para gerenciar uma lista de amigos e sortear um nome aleatoriamente. Ele permite adicionar amigos à lista, remover amigos e realizar um sorteio para selecionar um amigo de forma aleatória.

Tecnologias Utilizadas

HTML: Estrutura da página.

CSS: Estilização da interface (não incluso neste repositório, mas pode ser adicionado).

JavaScript: Manipulação da DOM e lógica da aplicação.

Funcionalidades

Adicionar amigos: Permite inserir nomes na lista.

Atualizar lista: Exibe dinamicamente os amigos adicionados.

Sortear amigo: Escolhe aleatoriamente um nome da lista e exibe o resultado.

Como Usar

Digite um nome no campo de entrada e clique no botão "Adicionar".

A lista será atualizada automaticamente com o novo nome.

Para remover um amigo, clique no botão "Remover" ao lado do nome.

Para realizar um sorteio, clique no botão "Sortear amigo".

O nome sorteado será exibido na tela.

Estrutura do Código

atualizarListaAmigos()

Limpa a lista exibida antes de adicionar novos elementos.

Percorre o array de amigos e exibe cada nome como um item <li> na lista, adicionando um botão de remoção.

adicionarAmigo()

Captura o nome inserido pelo usuário.

Valida se o campo não está vazio.

Adiciona o nome ao array de amigos.

Atualiza a lista exibida.

removerAmigo(indice)

Remove o amigo da lista pelo índice.

Atualiza a exibição da lista na interface.

sortearAmigo()

Verifica se há amigos cadastrados.

Gera um índice aleatório e seleciona um nome do array.

Exibe o nome sorteado.

exibirResultadoSorteio(amigo)

Atualiza o elemento HTML responsável por mostrar o resultado do sorteio.

Melhorias Futuras

Implementar um sistema de armazenamento local (LocalStorage) para manter a lista entre sessões.
Tive dificuldades para fazer esse código rodar, por que vivia dando erro e eu queria atear fogo no computador. E fora que sou bem iniciante e não achava o que estava errado, foi quando não aguentei mais e pedi ajuda ao chat gpt,acreditem era um ponto e vírgula que esqueci de colocar. Tenho muito a aprender mais foi legal fazer esse site.

Melhorar o design da interface com CSS.

Contribuição

Contribuições são bem-vindas! Caso tenha sugestões ou melhorias, sinta-se à vontade para abrir um pull request.


let livros = [
]

var AdicionarLivro = function(e){
  e.preventDefault()

  nome = document.getElementById("nome_livro").value;
  autor = document.getElementById("nome_autor").value;
  isbn = document.getElementById("isbn_code").value;
  livros.push({
    nome: nome,
    autor: autor,
    isbn: isbn
  });

  document.getElementById("formulario").reset();
};

var MostrarLivros = function () {
  let output = ""
  livros.forEach(function(livro){
    output +=
    `<tr id='${livro.isbn}'>
     <td>${livro.nome}</td>
     <td>${livro.autor}</td>
     <td>${livro.isbn}</td>
     <td><button onclick="ExcluirLivro(${livro.isbn},MostrarLivros)">Excluir</button></td>
     </tr>
    `
  });

  document.getElementById("conteudo").innerHTML = output;
};

var ExcluirLivro = function (elem, callback){

  livros = livros.filter(function(livro) {
    return (livro.isbn !== elem.id);
  });

  callback();
};

window.addEventListener('load', MostrarLivros);
document.getElementById('botao-enviar').addEventListener('click', AdicionarLivro);
document.getElementById("formulario").addEventListener('reset', MostrarLivros);

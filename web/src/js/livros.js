let livros = []

function AdicionarLivro(){

  nome = document.getElementById("nome_livro");
  autor = document.getElementById("nome_autor");
  isbn = document.getElementById("isbn_code");
  livros.push({
    nome: nome,
    autor: autor,
    isbn: isbn
  });

};

document.getElementById('botao-enviar').addEventListener('click', AdicionarLivro);

let livros = []

function AdicionarLivro(e){
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

document.getElementById('botao-enviar').addEventListener('click', AdicionarLivro);

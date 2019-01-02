let livros = [
  {
    "nome": "fanta",
    "autor" : "coca",
    "isbn": 3425
  }
]

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

function MostraLivros() {
  let output = ""
  livros.forEach(function(livro){
    output +=
    `<tr>
     <td>${livro.nome}</td>
     <td>${livro.autor}</td>
     <td>${livro.isbn}</td>
     </tr>
    `
  })

  document.getElementById("conteudo").innerHTML = output;
};
document.getElementById('botao-enviar').addEventListener('click', AdicionarLivro);

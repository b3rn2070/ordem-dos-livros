const autor = {
    id: 1,
    nome: 'J. R. R. Tolkien'
}

console.log(autor.id)
console.log(autor.nome)

const livro = {
    id: 2,
    nome: 'O Hobbit',
    autor: autor,
    ano: 1937,
    ordem: 1,
}

console.log(livro)
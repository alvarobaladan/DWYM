const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

function getTheTitles(books){
    let booksNames = [];

    for(let i = 0; i < books.length; i++){
      booksNames.push(books[i].title);
    }

    console.log("Nombres de los libros en el array: " + booksNames.toString());

    return booksNames;
}
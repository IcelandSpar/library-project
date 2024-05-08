


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${this.title}, by ${this.author} is ${this.pages} pages long, and I have ${this.read} this book.`
    }
  }
  const againstTheDay = new Book("Against The day", "Thomas Pynchon", 1200, "read");
  
 
  const myLibrary = [];

  let looper = function() {

    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
  }

  
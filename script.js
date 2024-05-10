


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${this.title}, by ${this.author} is ${this.pages} pages long, and I have ${this.read} this book.`
    }
  }

  function addBookToLibrary() {
    const formContainer = document.querySelector('.formContainer');
    const newForm = document.createElement("div");
  
    newForm.style.cssText = 'color: green;'
    newForm.textContent = 'Hello World'
    formContainer.appendChild(newForm)
  
  }


  const againstTheDay = new Book("Against The day", "Thomas Pynchon", 1805, "read");
  const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 310, "not read");
  const infiniteJest = new Book("Infinite Jest", "David Foster Wallace", 2005, "read");
  const howToBeAlone = new Book("How to Be Alone", "Jonathan Franzen", 320, "read");
  
 
  const myLibrary = [againstTheDay.info(), theHobbit.info(), infiniteJest.info(), howToBeAlone.info()];




  let looper = function() {

    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        const table = document.querySelector(".table");
        const tableRow = document.createElement("tr");
        const tableData = document.createElement("td");
        


        tableData.textContent = myLibrary[i];
        

        table.appendChild(tableRow);
        tableRow.appendChild(tableData);

    }
  }

  looper();


const dialog = document.querySelector(".dialog")



  const newBookBtn = document.querySelector('.newBookBtn')

    newBookBtn.addEventListener('click', () => {
    dialog.showModal();

    form.reset();
  })




  const addBookBtn = document.querySelector("button[value=save]");
  


  addBookBtn.addEventListener("click", (evt) => {
    
    evt.preventDefault();

    dialog.close();

    const newBook = new Book(title.value, author.value, pages.value, read.value);

    const tableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    
    const table = document.querySelector(".table");


    table.appendChild(tableRow);
    tableRow.appendChild(tableData);
    tableData.textContent = newBook.info();
    
  })





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
  
 
  const myLibrary = [againstTheDay.title, theHobbit.title, infiniteJest.title, howToBeAlone.title];
  const myAuthors= [againstTheDay.author, theHobbit.author, infiniteJest.author, howToBeAlone.author];
  const myPages = [againstTheDay.pages, theHobbit.pages, infiniteJest.pages, howToBeAlone.pages]
  const readOrNot = [againstTheDay.read, theHobbit.read, infiniteJest.read, howToBeAlone.read]

  let looper = function() {

    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        const table = document.querySelector(".table");
        const tableRow = document.createElement("tr");

        const tableDataTitles = document.createElement("th");
        const tableDataAuthors = document.createElement("td");
        const tableDataPages = document.createElement("td");
        const tableDataReads = document.createElement("td");
        


        tableDataTitles.textContent = myLibrary[i];
        
        



        table.appendChild(tableRow);
        tableRow.appendChild(tableDataTitles);

        
        tableRow.appendChild(tableDataAuthors);
        tableDataAuthors.textContent = myAuthors[i];

        tableRow.appendChild(tableDataPages);
        tableDataPages.textContent = myPages[i];

        tableRow.appendChild(tableDataReads);
        tableDataReads.textContent = readOrNot[i];

       
        const tableDataBtnContainer = document.createElement("td");
        const tableReadBtn = document.createElement("button");

        tableRow.appendChild(tableDataBtnContainer);
        tableDataBtnContainer.appendChild(tableReadBtn);
        
        tableReadBtn.textContent = "Change";
        tableReadBtn.style.cssText = "padding: 12px 1ch; font-size: 1.5rem; font-family: 'Comic Neue'; border-radius: 10px;"
    /////////////////////////
        tableReadBtn.addEventListener("click", () => {
          if (tableDataReads.textContent == "read") {
            tableDataReads.textContent = "not read";
          } else {
            tableDataReads.textContent = "read";
          }
        //////////////////////////////
        });


        


    const tableDataRemoveContainer = document.createElement("td");
    const tableDataRemoveButton = document.createElement("button");
    tableRow.appendChild(tableDataRemoveContainer);
    tableDataRemoveContainer.appendChild(tableDataRemoveButton);
    tableDataRemoveButton.textContent = "Remove Book";

    tableDataRemoveButton.style.cssText = "padding: 12px 1ch; font-size: 1.5rem; font-family: 'Comic Neue'; border-radius: 10px;"

    
    
    tableDataRemoveButton.addEventListener("click", () => {
      table.removeChild(tableRow);
    })




    }
  }

  looper();


const dialog = document.querySelector(".dialog")



  const newBookBtn = document.querySelector('.newBookBtn')

    newBookBtn.addEventListener('click', () => {
    dialog.showModal();

    form.reset();
  })

const exitBtn = document.querySelector('.exitBtn');

exitBtn.addEventListener("click", () => {
  dialog.close();
})


  const addBookBtn = document.querySelector("button[value=save]");
  


  addBookBtn.addEventListener("click", (evt) => {
    
    evt.preventDefault();

    dialog.close();

    const newBook = new Book(title.value, author.value, pages.value, read.value);

    const tableRow = document.createElement("tr");
    const tableDataTitle = document.createElement("th");
    
    const table = document.querySelector(".table");


    table.appendChild(tableRow);
    tableRow.appendChild(tableDataTitle);
    tableDataTitle.textContent = newBook.title;

    

    const tableDataAuthor = document.createElement("td");

    tableRow.appendChild(tableDataAuthor);
    tableDataAuthor.textContent = newBook.author;


    const tableDataPages = document.createElement("td");

    tableRow.appendChild(tableDataPages);
    tableDataPages.textContent = newBook.pages;

    
    const tableDataRead = document.createElement("td");
    const tableDataBtnContainer = document.createElement("td");
    const tableReadBtn = document.createElement("button");

    tableRow.appendChild(tableDataRead);
    

    
    tableDataRead.textContent = newBook.read;
    tableRow.appendChild(tableDataBtnContainer);
    tableDataBtnContainer.appendChild(tableReadBtn);
    
    tableReadBtn.textContent = "Change";
    tableReadBtn.style.cssText = "padding: 12px 1ch; font-size: 1.5rem; font-family: 'Comic Neue'; border-radius: 10px;"
/////////////////////////
    tableReadBtn.addEventListener("click", () => {
      if (tableDataRead.textContent == "read") {
        tableDataRead.textContent = "not read";
      } else {
        tableDataRead.textContent = "read";
      }
    //////////////////////////////
    })




    const tableDataRemoveContainer = document.createElement("td");
    const tableDataRemoveButton = document.createElement("button");
    tableRow.appendChild(tableDataRemoveContainer);
    tableDataRemoveContainer.appendChild(tableDataRemoveButton);
    tableDataRemoveButton.textContent = "Remove Book";

    tableDataRemoveButton.style.cssText = "padding: 12px 1ch; font-size: 1.5rem; font-family: 'Comic Neue'; border-radius: 10px;"

    
    
    tableDataRemoveButton.addEventListener("click", () => {
      table.removeChild(tableRow);
    })


    
  })






const loadBook = () => {
    const searchName = document.getElementById('bookName');
    const searchValue = searchName.value;

    fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
    .then((response) => response.json())
    .then ((data) => showBook(data))
};


const showBook =(data) => {
    const {numFound, docs} = data;
    docs.map((singleTitle) => {
      console.log(singleTitle);
      const {author_name, title, first_publish_year: fpy, publisher } = singleTitle;
      const bookshow = document.getElementById('bookShow');
    const book = document.createElement('div');
    book.classList.add('col');
    book.innerHTML = `
    <h3>Title: ${title}</h3>
    <p>Author Name: ${author_name[0]}</p>
    <p>First Publish: ${fpy}</p>
    <p>publisher Name: ${publisher[0]}</p>
    `;
    bookshow.appendChild(book);
    });
    // =========>some other data need to be show 
    
    

    
};
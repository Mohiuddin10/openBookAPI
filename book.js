const loadBook = () => {
    const searchName = document.getElementById('bookName');
    const searchValue = searchName.value;
    console.log(searchValue);

    fetch('https://openlibrary.org/search.json?q=art+of+war')
    .then((response) => response.json())
    .then ((data) => showBook(data))
};


const showBook =(data) => {
    const {numFound} = data;
    

    const bookshow = document.getElementById('bookShow');
    const book = document.createElement('div');
    book.classList.add('book-card');
    book.innerHTML = `
    <div class="card mt-2" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"> Total number of book found: ${numFound}</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
    `;
    bookshow.appendChild(book);
};
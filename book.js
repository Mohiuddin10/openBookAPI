const loadBook = () => {
    const searchName = document.getElementById('bookName');
    const searchValue = searchName.value;
    const searchResult = document.getElementById('bookShow');
    searchResult.innerHTML = '';

    fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
    .then((response) => response.json())
    .then ((data) => showBook(data))
};


const showBook =(data) => {
    const {numFound, docs} = data;
    // show number of book found 
    const countBook = document.getElementById('bookNum');
    countBook.innerHTML = `Total book found: ${numFound}`;
    docs.map((singleTitle) => {
      console.log(singleTitle);
      const {author_name, title, first_publish_year: fpy, publisher, cover_i:pic, author_key:author } = singleTitle;
      const bookshow = document.getElementById('bookShow');
      // bookshow.innerHTML = ``;
    const book = document.createElement('div');
    book.classList.add('col');
    // =======> need to set border of colume element 
    book.innerHTML = `
    <div class="card p-2 ms-3 shadow">
    <div>
    <img src="https://covers.openlibrary.org/b/id/${pic}-M.jpg" class="card-img-top" alt="no image" />
    </div>
    <h5 class="card-title">Title: ${title}</h5>
    <p>Author Name: ${author_name[0]}</p>
    <p>First Publish: ${fpy}</p>
    <p>Publisher Name: ${publisher[0]}</p>
    <div>
    <button onclick="loadAuthor('${author}')" type="button" class="btn btn-outline-success" id="liveAlertBtn">Author Details</button>
    <div id="liveAlertPlaceholder"></div>
    </div>
    </div>
    `;
    bookshow.appendChild(book);
    });
    
    
  

    
};
const loadAuthor = (author_id) => {
  console.log(author_id);

  fetch(`https://openlibrary.org/authors/${author_id}.json`)
  .then(res => res.json())
  .then(data => showAuthor(data))
 } ;

 const showAuthor = (author) => {
  console.log(author);
 };
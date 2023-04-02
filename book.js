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
    
    

<button onclick="loadAuthor('${author}')" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Author Name: ${name}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>





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
  const {name, birth_date } = author;
  const authorDiv = document.getElementById('authorData');


  
};

 



// for author : 
{/* <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Toggle width collapse
        </button>
      </p> */}
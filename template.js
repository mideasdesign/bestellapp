function getBookListTemplate(i) {
    return /* html */`
            <div class="border border-gray-300 p-5 my-4 sm:p-10 rounded-3xl flex flex-col">
              <div class="flex flex-col lg:flex-row mb-7 mr-4">
                <img src="./assets/images/book${[i]}.webp" alt="" class="aspect-square mb-4 max-w-sm size-74 md:size-60 rounded-lg object-cover xl:aspect-7/8"> 
                <div class=" ml-4">  
                  <div class="flex mb-4">
                    <button onclick="likesStates(${[i]})" id="liked${[i]}" class="cursor-pointer mr-2">
                    </button> <h5 id="like${[i]}" class="mt-4 text-sm text-gray-700">Likes:${books[i].likes} </h5>  
                  </div>             
                  <h3 class="mt-4 text-xl sm:text-3xl md:text-2xl text-gray-700 h-auto mb-3 md:mb-0 md:min-h-21">${books[i].name} </h3>
                  <h4 class="mt-4 text-sm text-gray-700">Autor: ${books[i].author} </h4>
                  <h5 class="mt-4 text-sm text-gray-700">Gerne: ${books[i].genre} </h5>
                  <h5 class="mt-4 text-sm text-gray-700">Erscheinungsjahr: ${books[i].publishedYear} </h5>
                  <p class="mt-10 pt-10 text-3xl sm:text-2xl text-right font-medium text-red-600">€ ${books[i].price.toFixed(2)}</p>
                </div>              
              </div>
              <div id="book-comment${[i]}" class="flex flex-col">
              </div>

              <div id="new-comment${[i]}" class="flex flex-col">
              <h5 class="my-3">Kommentar erstellen:</h5>
                <input type="text" id="comment-name${[i]}" class="border border-gray-300 rounded-md py-2 px-4" placeholder="Bitte Name eingeben" />
                <textarea id="comment-content${[i]}" class="border border-gray-300 rounded-md py-2 px-4 my-4" placeholder="Bitte Kommentar eingeben"></textarea>
                <button onclick="addComments(${i})" id="input-comment" class="border border-gray-200 hover:border-gray-300 bg-gray-200 hover:bg-transparent rounded-md py-2 px-4">speichern</button>
              </div>
            </div>
    `
}

function getBookCommentsTemplate(i, j) {
  return /* html */`
    <div class="mb-5 flex flex-col">
          <p class="flex text-sm">${books[i].comments[j].name}</p>
          <p class="flex text-sm">${books[i].comments[j].comment}</p>
    </div>
  `
}

// get form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark (event){
    // form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl  = document.getElementById('siteUrl').value;

    var bookmark = {
      name: siteName, url: siteUrl
    }

    // localstorage

    if (localStorage.getItem('bookmarks') === null) {
      // initialise an array
      var bookmarks = [];
      // add to array
      bookmarks.push(bookmark);
      // set to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    else {
      // get bookmarks from localStorage
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      // add submitted nookmark to array
      bookmarks.push(bookmark);
      // re set back to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    // prevent form submit
    event.preventDefault();
  }

 function deleteBookmark(url) {
    console.log(url);
 }

 function fetchBookmarks() {

  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  var bookmarksResults = document.getElementById('bookmarkResults');
  // build output
  bookmarkResults.innerHTML = '';

  for(var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url  = bookmarks[i].url;
    bookmarkResults.innerHTML +=  '<div class="well">'+
                                  '<h3>'+ name +
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'"> Visit </a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#"> Delete </a> ' +
                                  '</h3>' +
                                  '</div>';



  }
}

function createBookmarkElement(tab) {
  var titleElem = document.createElement('span');
  titleElem.innerHTML = tab.title;
  var urlElem = document.createElement('span');
  urlElem.innerHTML = tab.url;

  var divElem = document.createElement('div');
  divElem.appendChild(titleElem);
  divElem.appendChild(urlElem);

  divElem.addEventListener('click', function(ev) {
    this.style.color = 'red';
    chrome.bookmarks.create({'title': this.childNodes[0].innerHTML, 'url': this.childNodes[1].innerHTML});
  }, false);

  return divElem;
}

chrome.windows.getAll({populate: true}, function(windows) {
  for(var i in windows) {
    for(var j in windows[i].tabs) {
      var elem = createBookmarkElement(windows[i].tabs[j]);
      document.body.appendChild(elem);
    }
  }
});


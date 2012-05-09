chrome.windows.getAll({populate: true}, function(windows) {
  for(var i in windows) {
    for(var j in windows[i].tabs) {
      document.body.innerHTML += windows[i].tabs[j].title
                               + '<br/>'
                               + windows[i].tabs[j].url
                               + '<br/><br/>';
    }
  }
});


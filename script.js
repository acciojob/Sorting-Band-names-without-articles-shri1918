window.onload = function() {
  let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Anthrax', 'Metallica'];

  // Sort the band names in lexicographic order excluding articles
  bandNames.sort(function(a, b) {
    return removeArticles(a) > removeArticles(b) ? 1 : -1;
  });

  // Display the sorted band names in the <ul> element
  const ul = document.getElementById('band');
  bandNames.forEach(function(name) {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
}

function removeArticles(name) {
  const articles = ['The ', 'A ', 'An '];
  articles.forEach(function(article) {
    if (name.startsWith(article)) {
      name = name.substring(article.length);
    }
  });
  return name;
}

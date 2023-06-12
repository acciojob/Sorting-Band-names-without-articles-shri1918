//your code here

let bandNames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Led Zeppelin'];

// Remove articles ('a', 'an', 'the') from the band names
const articles = ['a', 'an', 'the'];
const bandNamesWithoutArticles = bandNames.map(name => {
  let words = name.split(' ');
  words = words.filter(word => !articles.includes(word.toLowerCase()));
  return words.join(' ');
});

// Sort the band names in lexicographic order
const sortedBandNames = bandNamesWithoutArticles.sort();

// Display the sorted band names inside the 'band' ul element
const ulElement = document.getElementById('band');
sortedBandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

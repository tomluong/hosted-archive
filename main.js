const DEV_WIKI_URL = 'https://www.google.com';



var searchDevWiki = document.getElementById('search-dev-wiki');
searchDevWiki.addEventListener('click', function (event) {
    var searchInput = document.getElementById('search-input').value;
    window.open(`${DEV_WIKI_URL}/?query=${encodeURI(searchInput)}`, '_blank');
});
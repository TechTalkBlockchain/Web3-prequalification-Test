const words = [
    'JavaScript programming',
    'HTML and CSS basics',
    'Frontend development',
    'Web design principles',
    'Dynamic content handling'
];

const searchInput = document.querySelector('.search-bar input');
const itemList = document.getElementById('item-list');

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    itemList.innerHTML = '';

    words.forEach(word => {
        if (word.toLowerCase().includes(query)) {
            const highlightedWord = highlightText(word, query);
            const li = document.createElement('li');
            li.innerHTML = highlightedWord;
            itemList.appendChild(li);
        }
    });
});

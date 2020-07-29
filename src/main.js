
// Fetch the items from the JSON file.
function loadItems() {
    return fetch('data/data.json')
        .then(res => res.json())
        .then(json => json.items);
}

// Update the list with the given items.
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list from the given data item.
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
    `
}

function onButtonClick(event, items) {
    const { key, value } = event.target.dataset;

    if(key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
}

function setEventListener(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons') // 이벤트 위임
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
    .then(items=> {
        displayItems(items);
        setEventListener(items);
    })
    .catch(err => console.error(err));
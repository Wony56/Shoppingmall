'use strict';

const shirtButton = document.querySelector('.menu__buttons-shirt');
const pantsButton = document.querySelector('.menu__buttons-pants');
const skirtButton = document.querySelector('.menu__buttons-skirt');
const colorButtons = document.querySelectorAll('.button-color');
const list = document.querySelector('.list__clothes');



const init = () => {
    generateDataset(100);
    clothesList.forEach(clothe => {
        const item = document.createElement('li');
        item.className = 'list__clothes-item';
        item.dataset.type = clothe.type;
        item.dataset.color = clothe.color;
        const img = document.createElement('img');
        img.className = 'item__image';
        img.src = clothe.url;
        const gender = document.createElement('span');
        gender.className = 'item__gender';
        gender.textContent = clothe.gender + ',';
        const size = document.createElement('span');
        size.className = 'item__size';
        size.textContent = clothe.size;
        item.appendChild(img);
        item.appendChild(gender);
        item.appendChild(size);
        list.appendChild(item);
    });

    colorButtons.forEach(colorButton => {
        colorButton.addEventListener('click', colorChange);
    });

    shirtButton.addEventListener('click', listByType);
    pantsButton.addEventListener('click', listByType);
    skirtButton.addEventListener('click', listByType);
};

const removeAllItems = () => {
    document.querySelectorAll('.list__clothes-item').forEach(item => {
        list.removeChild(item);
    });
};

const listByColor = (color) => {
    removeAllItems();
    clothesList.filter(clothe => clothe.color === color).forEach(clothe => {
        const item = document.createElement('li');
        item.className = 'list__clothes-item';
        item.dataset.type = clothe.type;
        item.dataset.color = clothe.color;
        const img = document.createElement('img');
        img.className = 'item__image';
        img.src = clothe.url;
        const gender = document.createElement('span');
        gender.className = 'item__gender';
        gender.textContent = clothe.gender + ',';
        const size = document.createElement('span');
        size.className = 'item__size';
        size.textContent = clothe.size;
        item.appendChild(img);
        item.appendChild(gender);
        item.appendChild(size);
        list.appendChild(item);
    });
};

const listByType = (e) => {
    const type = e.target.dataset.type;
    removeAllItems();
    clothesList.filter(clothe => clothe.type === type).forEach(clothe => {
        const item = document.createElement('li');
        item.className = 'list__clothes-item';
        item.dataset.type = clothe.type;
        item.dataset.color = clothe.color;
        const img = document.createElement('img');
        img.className = 'item__image';
        img.src = clothe.url;
        const gender = document.createElement('span');
        gender.className = 'item__gender';
        gender.textContent = clothe.gender + ',';
        const size = document.createElement('span');
        size.className = 'item__size';
        size.textContent = clothe.size;
        item.appendChild(img);
        item.appendChild(gender);
        item.appendChild(size);
        list.appendChild(item);
    });
};

const colorChange = (e) => {
    if(e.target.dataset.color === 'blue'){
        shirtButton.style.backgroundImage = "url('./img/blue_t.png')";
        pantsButton.style.backgroundImage = "url('./img/blue_p.png')";
        skirtButton.style.backgroundImage = "url('./img/blue_s.png')";
        shirtButton.dataset.type = 'blue_t';
        pantsButton.dataset.type = "blue_p";
        skirtButton.dataset.type = "blue_s";
        listByColor('blue');
    }else if(e.target.dataset.color === 'yellow') {
        shirtButton.style.backgroundImage = "url('./img/yellow_t.png')";
        pantsButton.style.backgroundImage = "url('./img/yellow_p.png')";
        skirtButton.style.backgroundImage = "url('./img/yellow_s.png')";
        shirtButton.dataset.type = 'yellow_t';
        pantsButton.dataset.type = "yellow_p";
        skirtButton.dataset.type = "yellow_s";
        listByColor('yellow')
    }else if(e.target.dataset.color === 'pink') {
        shirtButton.style.backgroundImage = "url('./img/pink_t.png')";
        pantsButton.style.backgroundImage = "url('./img/pink_p.png')";
        skirtButton.style.backgroundImage = "url('./img/pink_s.png')";
        shirtButton.dataset.type = 'pink_t';
        pantsButton.dataset.type = "pink_p";
        skirtButton.dataset.type = "pink_s";
        listByColor('pink');
    }
};




init();

let characters = [
    ['Коннор','Детектив'],
    ['Кэра', 'Андроид-беженец'], 
    ['Маркус', 'Предводитель девинатов']
];
let charactersContainer = document.getElementById('charactersContainer');

function makingCard(i) {
    let card = document.createElement('div');
    card.innerHTML = `
        <img src="images/${i+1}.jpg">
        <h3>${characters[i][0]}</h3>
        <p>${characters[i][1]}</p> 
    `;
    card.classList.add('card');
    charactersContainer.append(card);
}

function displayCards() {
    charactersContainer.innerHTML = '';
    for (let i = 0; i < characters.length; i++) {
        makingCard(i);
    }
}
displayCards();

function NewCard() {
    let characterName = document.getElementById('characterName');
    let characterRole = document.getElementById('characterRole');
    let newCard = [characterName.value, characterRole.value];
    
    if (characterName.value && characterRole.value) {
        characters.push(newCard);
        displayCards();
    }

    characterName.value = '';
    characterRole.value = '';
}

document.getElementById('NewCards').addEventListener('click', NewCard)
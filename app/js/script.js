let deck = [];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const face = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const createDeck = function createDeck(deckArrayName) {
    suits.forEach(function(suit) {
        face.forEach(function(face, index) {
            var card = {
                face,
                suit,
                value: index + 1,
            }
            deckArrayName.push(card);
        });
    });
};
const shuffleDeck = function shuffleDeck(deck) {
    let remainingElements = deck.length;
    let temp;
    let elementToMove;

    while (remainingElements) {
      // Pick a remaining element…
      elementToMove = Math.floor(Math.random() * remainingElements--);
      // And swap it with the current element.
      temp = deck[remainingElements];
      deck[remainingElements] = deck[elementToMove];
      deck[elementToMove] = temp;
    }
};
const createUI = function createUI(deck, insertPosition) {
    deck.forEach(function(element) {
        // create a new div element 
        const newCard = document.createElement("div");
        let symbols = '';
        if (element.value < 11) {
            for (i = 0; i < element.value; i++) {
                symbols += `<span></span>`;
            };
        } else if (element.value === 11) {
            symbols = `<span class="jack"></span>`;
        } else if (element.value === 12) {
            symbols = `<span class="queen"></span>`;
        } else if (element.value === 13) {
            symbols = `<span class="king"></span>`;
        }
        newCard.id = element.face + element.suit;
        newCard.classList = `card _${element.face} ${element.suit}`;
        newCard.setAttribute('data-value', element.value);
        newCard.innerHTML = `
            <span class="top">${element.face}</span>
            <span class="middle">${symbols}</span>
            <span class="bottom">${element.face}</span>
        `;
        //Insert it into defined div
        insertPosition.appendChild(newCard);
    });
};

createDeck(deck);
shuffleDeck(deck);
createUI(deck, table)
console.table(deck);
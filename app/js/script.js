'use strict';

const Cards = {
    suits: ['clubs', 'diamonds', 'hearts', 'spades'],
    face: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    createDeck: function createDeck(deckArrayName, faceUp) {
        this.suits.forEach((suit) => {
            this.face.forEach((face, index) => {
                const card = {
                    face,
                    suit,
                    value: index + 1,
                    faceUp,
                }
                deckArrayName.push(card);
            });
        });
    },
    shuffleDeck: function shuffleDeck(deck) {
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
    },
    createUI: function createUI(deck, insertPosition) {
        deck.forEach((element) => {
            // Create a new div element 
            const newCard = document.createElement("div");
            let symbols = '';                   //Glyphs shown in middle of card
            if (element.value < 11) {           //Not a picture card
                for (let i = 0; i < element.value; i++) {
                    let invertedModifier = 0;   //6 & 7 need a tweak to calculate which glyphs need inverting
                    element.value === 6 || element.value === 7 ? invertedModifier = 1 : invertedModifier = 0;
                    if (i >= Math.ceil(element.value / 2) + invertedModifier) {
                        symbols += `<span class="inverted"></span>`;
                    } else {
                        symbols += `<span></span>`;
                    }
                };
            } else if (element.value === 11) {
                symbols = `<span class="jack"></span>`;
            } else if (element.value === 12) {
                symbols = `<span class="queen"></span>`;
            } else if (element.value === 13) {
                symbols = `<span class="king"></span>`;
            }
            let faceUp = '';
            element.faceUp ? faceUp = 'face-up' : faceUp = '';
            newCard.id = element.face + element.suit;
            newCard.classList = `card _${element.face} ${element.suit} ${faceUp}`;
            newCard.setAttribute('data-value', element.value);
            newCard.innerHTML = `
                <span class="card-front">
                    <span class="top">${element.face}</span>
                    <span class="middle">${symbols}</span>
                    <span class="bottom inverted">${element.face}</span>
                </span>
                <span class="card-back"></span>
            `;
            // Insert it into defined div
            insertPosition.appendChild(newCard);
        });
    },
};

let deck = [];

Cards.createDeck(deck, true);   //Create new deck, cards face up
Cards.shuffleDeck(deck);
Cards.createUI(deck, table)
console.table(deck);
## Playing card generator

### What is this?
A JS object to create responsive playing cards and output them to the UI

### How to use
* Clone
* `npm i`
* `gulp`

#### Available methods
* cards.createDeck(_yourDeck, bool_)

`yourDeck`: array to push the cards into  <br /> `bool`: true will set cards to be face up, false will set them face down

* cards.shuffleDeck(_yourDeck_)

`yourDeck`: array containing cards to be shuffled

* cards.createUI(_yourDeck, divID_)

`yourDeck`: array containing cards to have UI elements drawn  <br />  `divID`: ID in DOM where cards will be inserted

### To build distribution files:
* `gulp build`

### To deploy distribution files to Github pages:
* `gulp deploy-ghp`

[View now on Github pages](https://freshlybakedcode.github.io/playing-cards/)
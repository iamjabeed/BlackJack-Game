let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let playerDetails = {
  chips: 120,
  name: "jaddu",
};
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = playerDetails.name + ": $" + playerDetails.chips;

function getRandomNum() {
  // return Math.floor(Math.random() * 13) + 1;
  // if 1 ---> return 11
  // if 11,12,13 ---> return 10
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}

function startGame() {
  // console.log("working");
  isAlive = true;
  let firstcard = getRandomNum();
  let secondcard = getRandomNum();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got blackjack! 🥳";
    hasBlackjack = true;
  } else {
    message = "You're out of game ! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "sum: " + sum;
}

function drawNewCard() {
  // document.body.innerText = "Drawing new card.....";

  if (isAlive == true && hasBlackjack == false) {
    let card = getRandomNum();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    alert("Start a new game!! 😑");
  }

  // console.log(cards);
}

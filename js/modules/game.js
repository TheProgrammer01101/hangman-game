import Home from './home.js';
import { sound } from '../data/sound.js';

const Game = (()=> {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const words = ['orange', 'chair', 'cat', 'dog', 'zebra'];
  let chosenWord, guessingWord, lives, guesses;

  // caching the DOM
  const hangmanElement = document.querySelector('.hangman');

  const init = ()=> {
    chosenWord = chooseWord();
    guessingWord = Array(chosenWord.length).fill('_');
    guesses = [];
    lives = 7;
    render();
    listeners();
  }

  const listeners = ()=> {
    hangmanElement.addEventListener('click', event => {
      if(event.target.matches('.hangman-letter')) {
        sound.click.play();
        check(event.target.innerHTML);
      }
      if(event.target.matches('.hangman-trigger')) {
        sound.click.play();
        Home.init();
      }
    })
  }

  const isAlreadyTaken = letter => {
    return guesses.includes(letter);
  }

  const check = guess => {
    if(isAlreadyTaken(guess)) return;
    guesses.push(guess);
    if(chosenWord.includes(guess)) {
      updateGuessingWord(guess);
    }
    else {
      lives--;
    }
    render();
    isGameOver();
  }

  const hasWon = () => guessingWord.join('') == chosenWord;
  const hasLost = () => lives <= 0; 

  const isGameOver = ()=> {
    if(hasWon()) {
      sound.win.play();
    }
    if(hasLost()) {
      sound.lose.play();
    }
  }

  const updateGuessingWord = guessingLetter => {
    chosenWord.split('').forEach((letter, index) => {
      if(letter == guessingLetter) {
        guessingWord[index] = letter;
        console.log(guessingWord);
      }
    })
  }

  const render = ()=> {
    let markup = `
      <p class='hangman-stats'> 
        Lives:
        <span class='hangman-lives'> ${lives} </span>
      </p>
      <h1 class='hangman-title'>Hangman</h1>
      <canvas class='hangman-board' height='155px'></canvas>
      <div class='hangman-word'>${guessingWord.join('')}</div>
      <p class='hangman-instructions'>Pick a lette below to guess the whole word.</p>
      <ul class='hangman-letters'>
      ${createLetters()}
      </ul>
      <button class='button hangman-trigger'>Main Menu</button>
      `;
    hangmanElement.innerHTML = markup;

  }
  const createLetters = ()=> {
    let markup = '';
    letters.forEach(letter => {
      markup += `
        <li class='hangman-letter ${isAlreadyTaken(letter) ? 'hangman-letter-active' : ''}'>${letter}</li>
      `;
    })
    return markup;
  }
  const chooseWord = ()=> {
    let randomNumber = Math.floor(Math.random() * words.length)
    return words[randomNumber];
  }

  return {
    init
  }
})();

export default Game;
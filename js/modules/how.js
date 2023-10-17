import Home from "./home.js";
import { sound } from "../data/sound.js";
const How = (()=> {
  // cache the DOM
  const hangmanElement = document.querySelector('.hangman');

  const init = ()=> {
    render();
    listeners()
  }

  const listeners = ()=> {
    document.querySelector('.hangman-trigger').addEventListener('click', ()=> {
      Home.init();
      sound.click.play();
    })
  }

  const render = () => {
    let markup = `
      <h1 class='hangman-title'>Instructions</h1>
      <ul class='how'>
        <li>You need to guess the word letter by letter using the letter buttons</li>
        <li>When you start a new game, the game will automatically choose a random word</li>
        <li>You have 7 attempts to guess the word</li>
        <li>If you fail, you will be hanged without mercy 👻</li>
      </ul>
      <button class='button hangman-trigger'>Main Menu</button>
    `;
    hangmanElement.innerHTML = markup;
  }

  return {
    init
  }
})();

export default How;
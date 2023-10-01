import Game from "./game.js";
import How from "./how.js";
import { sound } from './../data/sound.js'

const Home = ( ()=> {

  const hangmanElement = document.querySelector('.hangman');

  const init = ()=> {
    render();
    listeners();
  }

  const render = ()=> {
    let markup = `
      <h1 class='hangman-title'> Hangman </h1>
      <button class='button start'> New Game </button>
      <button class='button instructions'> Instructions </button>
    `
    hangmanElement.innerHTML = markup;
  }

  const listeners = ()=> {
    document.querySelector('.start').addEventListener('click', ()=> {
      Game.init();
      sound.click.play();
    })

    document.querySelector('.instructions').addEventListener('click', ()=> {
      How.init();
      sound.click.play();
    })
  }

  return {
    init
  }
})();

export default Home;
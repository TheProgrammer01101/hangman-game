const End = (()=> {
  const state = {
    chosenWord: null,
    winOrLose: null,
  }

  const hangmanElement = document.querySelector('.hangman');

  const setState = obj => {
    state.chosenWord = obj.chosenWord;
    state.winOrLose = obj.result;
    render();
  }

  const render = () => {
    let markup = `
      <h1 class='hangman-title'>GAME OVER </h1>
      <p class='result'> You ${state.winOrLose.toUpperCase()}! <br>
      The word is 👉🏼 ${state.chosenWord.toUpperCase()}. </p>
      <button class='button hangman-trigger'>Main Menu</button>
    `;
    hangmanElement.innerHTML = markup;
  }

  return {
    setState
  }
})();

export default End;
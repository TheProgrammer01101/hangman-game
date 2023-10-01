const Home = ( ()=> {
  const hangmanElement = document.querySelector('.hangman');
  const init = ()=> {
    render();
  }

  const render = ()=> {
    let markup = `
      <h1 class='hangman-title'> Hangman </h1>
      <button class='button start'> New Game </button>
      <button class='button instruction'> Instructions </button>
    `
    hangmanElement.innerHTML = markup;
  }

  return {
    init
  }
})();

export default Home;
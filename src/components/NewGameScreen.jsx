import './NewGameScreen.css'

const NewGameScreen = (props) => {
  return (
    <div className='new-game-screen'>
      <h1>Quizzical</h1>
      <p>let's get started</p>
      <button 
        className='start-game-btn'
        onClick={props.newGame}
      >
        Start Quiz
      </button>
    </div>
  )
}

export default NewGameScreen;
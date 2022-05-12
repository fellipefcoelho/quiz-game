import {useState, useEffect} from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import NewGameScreen from './components/NewGameScreen';

function App() {

  const [data, setData] = useState([])
  const [newGame, setNewGame] = useState(true)

  useEffect(() => {
    async function fetchQuizApi() {
      let response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      response = await response.json()
      setData(response)
    }
    fetchQuizApi()
  }, [])

  const startNewGame = () => {
    setNewGame(prevState => !prevState)
  }

  return (
    <div className="App">
      {
        newGame ? 
        <NewGameScreen
          newGame={startNewGame}
        /> : 
        <GameScreen
          data={[data.results]}
        />
      }
    </div>
  );
}

export default App;

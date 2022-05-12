import Question from './Question'
import './GameScreen.css'

const GameScreen = (props) => {
  
  const mapData = () => {
    return (
      props.data[0].map(question => {
        return <Question
                  question={question.question}
                  correctAnswer={question.correct_answer}
                  incorrectAnswers={question.incorrect_answers}
                />
      })
  )}
  return (
    <div className='gamescreen'>
      {mapData()}
      <div className='check-answer'>
        <button className='check-answer-btn'>Check Answer</button>
      </div>
    </div>
  )
}

export default GameScreen;
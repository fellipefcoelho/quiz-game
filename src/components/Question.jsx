import './Question.css'

const Question = (props) => {

  const questions = [props.correctAnswer]
  const incorrectQuestions = props.incorrectAnswers
  questions.push(...incorrectQuestions)

  console.log(questions)

  const shuffleArray = array => {
    for(let i = 0; i < array.length; i++){
      let randomNum = Math.floor(Math.random() * array.length);
      let temp = ""
      let currentQuestion = array[i]
      let randomQuestion = array[randomNum]
      //swap
      temp = currentQuestion
      array[i] = randomQuestion
      array[randomNum] = temp
    }
    return array;
  }

  console.log(shuffleArray(questions))

  const mapQuestions = shuffleArray(questions).map(question => {
    return (
      <button className='answer-btn'>{question}</button>
    )
  })

  return (
    <div className='question'>
      {props.question}
      <div className='answer-options'>
        {mapQuestions}
      </div>
      <hr />
    </div>

  )
}

export default Question
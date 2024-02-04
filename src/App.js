import logo from './logo.svg';
import './App.css';

function Button1_1() {

  return (
    <button onClick={() => {
      increaseQuestionIndex();
      CurrentButtons.forceUpdateHandler();
      console.log("button 1 1 pressed: questionIndex: " + questionIndex);
    }
  }>Button1_1</button>
  )
}

function Button1_2() {

  return (
    <button onClick={() => {
      increaseQuestionIndex();
      CurrentButtons.forceUpdateHandler();
      console.log("button 1 2 pressed: questionIndex: " + questionIndex);
    }
  }>Button1_2</button>
  )
}

function Button2_1() {

  return ( 
    <button onClick={() => {
      increaseQuestionIndex();
      CurrentButtons.forceUpdateHandler();
      console.log("button 2 1 pressed: questionIndex: " + questionIndex);
    }
  }>Button2_1</button>
  )
}

function Button2_2() {

  return (
    <button onClick={() => {
      increaseQuestionIndex();
      CurrentButtons.forceUpdateHandler();
      console.log("button 2 2 pressed: questionIndex: " + questionIndex);
    }
  }>Button2_2</button>
  )
}

function CurrentButtons({questionIndex}) {
  forceUpdateHandler = () => {
    this.forceUpdate();
  };

  switch (questionIndex) {
  
    case 0: 
      {
        return (
          <div>
            <p>
              Here is question 1 ahhhh!
            </p>
            <Button1_1 />
            <Button1_2 />
          </div>
        )
        //break;
      }

    case 1:
      {
        return (
          <div>
            <p>
              Here HAYs QEUBSIN 2 ahhhh!
            </p>
            <Button2_1 />
            <Button2_2 />
          </div>
        )
        //break;
      }
  }
}

//function that returns the integer value of questionIndex
function getQuestionIndex() {
  return questionIndex;
}

function increaseQuestionIndex() {
  questionIndex++;
  console.log("questionIndex increased " + questionIndex);
}

function decreaseQuestionIndex() {
  questionIndex--;
  console.log("questionIndex decreased " + questionIndex);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        //Variables
        let questionIndex = 0;
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola mundo
        </p>
        <CurrentButtons questionIndex={questionIndex} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

//Variables
let questionIndex = 0;

function Button1_1() {
  questionIndex++;

  return (
    <button onClick={() => alert(`Button1_1\nQuestion Index: ${questionIndex}`)}>Button1_1</button>
  )
}

function Button1_2() {
  questionIndex++;
  
  return (
    <button onClick={() => alert(`Button1_2\nQuestion Index: ${questionIndex}`)}>Button1_2</button>
  )
}

function Button2_1() {
  questionIndex++;
  
  return (
    <button onClick={() => alert(`Button2_1\nQuestion Index: ${questionIndex}`)}>Button2_1</button>
  )
}

function Button2_2() {
  questionIndex++;
  
  return (
    <button onClick={() => alert(`Button2_2\nQuestion Index: ${questionIndex}`)}>Button2_2</button>
  )
}

function CurrentButtons({questionIndex}) {
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
        break;
      }

    case 1:
      {
        return (
          <div>
            <p>
              Here HAYs QEUBSIN 2 ahhhh!
            </p>
            <Button1_1 />
            <Button1_2 />
          </div>
        )
        break;
      }
  }
}

//function that returns the questionindex of APp(): 
// function QuestionIndex() {
//   return (
//     <p>
//       {questionIndex}
//     </p>
//   )
// }


function App() {
  return (
    //how to comment inside div: 
    <div className="App">
      <header className="App-header">
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

// import logo from './logo.svg';

import './App.css';
import Appname from './components/Appname';
import Todo from './Todo';
// import New1 from './New1';
// import New2 from './New2';



// import Hello from './Hello';
// import Mybutton from './Mybutton';
// import Random from './Random';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>hello</h1> */}
      {/* <Mybutton></Mybutton>
      <Hello></Hello>
      <Random></Random> */}
      {/* <New1/>
      <New2/> */}
      
      <Appname/>
      <Todo/>
      
      
      

    </div>
  );
}

export default App;

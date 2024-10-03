import './App.css';
import Todo from './Components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FocusProvider from './Components/FocusProvider';


function App() {
  return (
    <div> 
      {/* <FocusProvider> */}
      <Todo></Todo>
      {/* </FocusProvider> */}
    </div>
  );
}

export default App;

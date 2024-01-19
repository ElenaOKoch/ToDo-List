import './App.css';
import imageOne from './imageOne.jpg';
import imageTwo from './imageTwo.jpg';
import { ThingsToDo } from './ThingsToDo.js';

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={imageOne} width="250px" alt="list1"/>
      </div>
      <div className="container">
    <h1>Things To Do</h1>
    </div>
<ThingsToDo/>
    <div className="container">
    <img src={imageTwo} width="250px" alt="list2"/>
    </div>
    </div>

  );
}

export default App;

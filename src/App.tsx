import GridComponent from './components/GridComponent/GridComponent';
import { EventBus } from './lowlevel/EventBus';
import './App.css';

function App() {
  const eventBus: EventBus = EventBus.getInstance();

  const handleOnClick = () => {
    eventBus.dispatch('solveButtonClicked');
  }

  const values = [
    [0,0,0,0,0,0,2,0,0],
    [0,8,0,0,0,7,0,9,0],
    [6,0,2,0,0,0,5,0,0],
    [0,7,0,0,6,0,0,0,0],
    [0,0,0,9,0,1,0,0,0],
    [0,0,0,0,2,0,0,4,0],
    [0,0,5,0,0,0,6,0,3],
    [0,9,0,4,0,0,0,7,0],
    [0,0,6,0,0,0,0,0,0],
  ];
  
  return (
    <div className="App">
      <GridComponent values={values}/>
      <button onClick={handleOnClick}>Solve</button>
    </div>
  );
}

export default App;

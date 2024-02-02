import GridComponent from './components/GridComponent/GridComponent';
import { EventBus } from './lowlevel/EventBus';
import './App.css';

function App() {
  const eventBus: EventBus = EventBus.getInstance();

  const handleOnClick = () => {
    eventBus.dispatch('solveButtonClicked');
  }
  
  return (
    <div className="App">
      <GridComponent />
      <button onClick={handleOnClick}>Solve</button>
    </div>
  );
}

export default App;

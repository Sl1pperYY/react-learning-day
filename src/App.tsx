import GridComponent from './components/GridComponent/GridComponent';
import { EventBus } from './lowlevel/EventBus';
import './App.css';

function App() {
  const eventBus: EventBus = EventBus.getInstance();

  return (
    <div className="App">
      <GridComponent />
    </div>
  );
}

export default App;

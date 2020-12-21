import './App.css';
import Weather from './components/weatherApi.js';

function App() {
  return (
    <div className="App">
    <h2>Find out today's Weather</h2>
    <Weather />
    </div>
  );
}

export default App;

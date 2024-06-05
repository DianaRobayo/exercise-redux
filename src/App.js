import './App.css';
import { Counter } from './components/Counter';
import { User } from './components/User';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <User />
    </div>
  );
}

export default App;

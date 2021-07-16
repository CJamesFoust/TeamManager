import './App.css';
import { Router, navigate } from '@reach/router';
import NewPlayer from './views/NewPlayer';
import PlayerList from './views/PlayerList';

function App() {
  return (
    <div className="App">
      <Router>
        <NewPlayer path="/players/addplayer" navigate={ navigate } />
        <PlayerList path="/players/list" navigate={ navigate } />
      </Router>
    </div>
  );
}

export default App;

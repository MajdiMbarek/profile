import Profile from '../Profile/Profile.js';
import pImg from '../../self.gif';
import "./App.css";
function App() {

  return (
    <div className="App">
      <Profile fullName="Majdi Mbarek" bio="Front end developer[react.js]" profession=" Web developer" imge={pImg} />
    </div>
  );
}

export default App;

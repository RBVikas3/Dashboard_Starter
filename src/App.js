import './App.css'
import Sidevbar from './components/Sidebar/Sidevbar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppGlasws">
        <Sidevbar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;

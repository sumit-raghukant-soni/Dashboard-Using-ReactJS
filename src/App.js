import './App.css'
import Sidebar from './components/sidebar/sidebar';
import MainDash from './components/mainDash/mainDash';
import RightSide from './components/RightSide/RightSide';
function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div>
    </div>
  );
}

export default App;

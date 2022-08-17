
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    //BEM naming conventsion
    <div className="app">
      
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
     
    </div>
  );
}

export default App;

import './App.css';
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Deen from './Components/Todo';

function App() {
  return (
    <>
      < Navbar />
    <div className="App">
      < Profile />
      <Deen />


    </div>
    </>
  );
}

export default App;
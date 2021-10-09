import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';


function App() {
  


  return (
    <div>
      <div  className="background">
        <div className="headerText">
          <h1 className="text-primary">SpaceX Launch Update</h1>
        </div>
      </div>
      <div>
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;

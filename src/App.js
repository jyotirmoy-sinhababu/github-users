import './App.css';
import MainApp from './Component/MainApp/MainApp';
import NavBar from './Component/navbar/NavBar';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='api'></div>
      <MainApp />
    </div>
  );
}

export default App;

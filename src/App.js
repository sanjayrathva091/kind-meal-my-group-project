import './App.css';
import MainRoutes from './MainRouting/MainRoutes';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
<div className="App">
<Navbar/>
<MainRoutes/>
<Footer/>
</div>
  );
}

export default App;

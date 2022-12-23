import logo from './logo.svg';
import './App.css';
import { Mobilepage } from './Pages_0381/Mobilepage';
import { Kindmoments } from './Pages_0381/Kindmoments';
import MainRoutes from './MainRouting/MainRoutes';

import './App.css';
import HomePage from './Pages_0381/HomePage';
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

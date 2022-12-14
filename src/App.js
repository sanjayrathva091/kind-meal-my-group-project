
import './App.css';
// import JoinFoodLover from './Pages/JoinFoodLover';
// import JoinShop from './Pages/JoinShop';
import Login from './Pages/LoginPage/Login';
// import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>SignUp</li>
          <li>Login</li>
        </ul>
      </nav>
      {/* <SignUp />
      <JoinFoodLover /> */}
      {/* <JoinShop /> */}
      <Login />
    </div>
  );
}

export default App;

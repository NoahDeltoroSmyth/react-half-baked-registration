import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { getUser, logout } from './services/users';
// import SignIn from './views/SignIn';
// import SignUp from './views/SignUp';
import Auth from './views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/signup">
            {currentUser && <h1>Signed in</h1>}
            {!currentUser && <SignUp setCurrentUser={setCurrentUser} />}
          </Route>
          <Route exact path="/signin">
            {currentUser && <h1>Signed in</h1>}
            {!currentUser && <SignIn setCurrentUser={setCurrentUser} />}
          </Route> */}
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>User is signed in</h1>
                <button onClick={logoutUser}>Logout</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

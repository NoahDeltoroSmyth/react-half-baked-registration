import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SignUp from './views/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* <SignUp /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

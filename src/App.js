import './App.css';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import CreatePost from './CreatePost/CreatePost';
import Register from './Register/Register';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route>
            <CreatePost path="/createpost" />
          </Route>
          <Route>
            <Register path="/register" />
          </Route>
          <Route>
            <Feed />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

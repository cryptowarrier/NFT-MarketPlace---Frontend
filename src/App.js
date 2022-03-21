import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts';
import Crator from './pages/crator';
import Create from './pages/create';
import Game from './pages/game';
import Landing from './pages/landing';
import Market from './pages/market';
import Profile from './pages/profile';
import LayoutProvider from './Provider';

function App() {
  return (
    <Router>
      <Switch>
        <LayoutProvider>
          <Layout>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/game'>
              <Game />
            </Route>
            <Route exact path='/crator'>
              <Crator />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/market'>
              <Market />
            </Route>
          </Layout>
        </LayoutProvider>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Cards></Cards>
          </Route>
          <Route path="/home">
            <Home></Home>
            <Cards></Cards>
          </Route>
          <Route path="/team-details/:teamShortName/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

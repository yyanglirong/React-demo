import React, { Component } from 'react';
import Styles from './styled-components/Styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Music from './views/Music'
import Movie from './views/Movie'
import Detail from './views/Detail'
class App extends Component {
  render() {
    return (
      <div>
         <Styles>
          <Router>
              <div className="nav">
                <div>
                  <Link to="/">电影</Link>
                </div>
                <div>
                  <Link to="/music">音乐</Link>
                </div>
              </div>
              <Switch>
                <Route exact path="/" component={Movie}></Route>
                <Route exact path="/music" component={Music}></Route>
                <Route exact path="/detail" component={Detail}></Route>
              </Switch>
          </Router>
          </Styles>
      </div>
      
    );
  }
}

export default App;

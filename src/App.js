import React from 'react';
import Home from './Home';
import Details from './Details';
import Details1 from './Details1';
import Details2 from './Details2';
import Book from './Book';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
        <div> 
          <Switch>
               <Route path="/" activeClassName="active" component={Home} exact/>
               <Route path="/Details" activeClassName="active" component={Details} exact/>
               <Route path="/Details1" activeClassName="active" component={Details1} exact/>
               <Route path="/Details2" activeClassName="active" component={Details2} exact/>
               
               <Route path="/Book" activeClassName="active" component={Book} exact/>
               
               
               
          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;



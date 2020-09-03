import React from 'react';
import './App.css';
import Home from './Pages/Home'
import {
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/header'
import Topic from './Pages/Topic'
import Product from './Pages/product'
import Notfound from './Pages/notfound'


// KaQbfZtYkRoZUwh6XsgkwVC1g1oNmMQmHpfKNpu5Tc6WbFr2KF
class App extends React.Component {
  render(){
    return(
        <div>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Home />
            </Route>
            <Route exact path='/product'>
              <Header/>
              <Product/>
            </Route>
            <Route path='/topics' component={Topic} />
              {/* <Topic/> */}
            {/* </Route> */}
            <Route path='*'>
              <Notfound/>
            </Route>
          </Switch>
        </div>
    )
  }
}



export default App;

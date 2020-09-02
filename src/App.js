import React from 'react';
import './App.css';
import Home from './Pages/Home'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/header'
import Topic from './Pages/Topic'
import Product from './Pages/product'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/product'>
              <Product/>
            </Route>
            <Route exact path='/topics'>
              <Topic/>
            </Route>
            <Route path='*'>
              <div>
                <h1>404 not found</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}



export default App;

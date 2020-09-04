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
import Axios from 'axios'

// KaQbfZtYkRoZUwh6XsgkwVC1g1oNmMQmHpfKNpu5Tc6WbFr2KF
class App extends React.Component {

  state={
    token:'',
    dataprovinsi:[]
  }

  componentDidMount(){
    Axios.get('https://x.rajaapi.com/poe')
    .then((res)=>{
      // console.log('dasdsad')
      this.setState({token:res.data.token})
    }).catch((err)=>{
      console.log(err)
    })
    // console.log('jalan')
  }
  gantidataprov=(data)=>{
    this.setState({dataprovinsi:data})
  }
  render(){
    if(this.state.token){
      return(
          <div>
            <Switch>
              <Route exact path='/'>
                <Header/>
                <Home provinsi={this.state.dataprovinsi} />
              </Route>
              <Route exact path='/product' >
                <Header/>
                <Product gantidata={this.gantidataprov} datatoken={this.state.token}/>
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
    }else{
      return (<div>Loading..</div>)
    }
  }
}



export default App;

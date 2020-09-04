import React from 'react';
import {Link,Switch, Route} from 'react-router-dom'
import Header from './../components/header'
const Topic =(props)=> {
    // const match=useRouteMatch()
    // console.log(this.props)
    const {match}=props 
    console.log(match)
    return (
        <>
            <Header/>
            <div className='row'>
                <div className="col-md-6">
                        ini topic
                    <Link to='/product'>
                        <button>to Product</button>
                    </Link>
                    <Link to={match.path+'/dino'}>
                        {/* topics/dino */}
                        ke kanan
                    </Link>
                    <Link to={match.path+'/max'}>
                        {/* topics/max */}
                        ke max
                    </Link>
                </div>
                <div className="col-md-6">
                    <Switch>
                        <Route exact path={match.url}>
                            <div>
                                ggg
                            </div>
                        </Route>
                        <Route path={match.url+'/:dino'} component={Topic1}/>
                    </Switch>
                </div>
            </div>
        </>
    )
 
}
const Topic1=(props)=>{
    console.log(props.match.params)
    return (
        <div style={{backgroundColor:'red'}}>
            hahaha {props.match.params.dino}
        </div>
    )
}

export default Topic;

// export default Topic
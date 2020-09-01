import React, { Component } from 'react';


class Tulisan extends Component {
    state = {  }
    render() { 
        if(this.props.red){
            var style={
                color:'red'
            }
            return (
            <h3 style={style}>{this.props.children}</h3>
            )
        }
        return (
        <h3>{this.props.children}</h3>
         );
    }
}
 
export default Tulisan;
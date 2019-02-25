import React, { Component } from 'react';

class Link extends Component{
    constructor(props){
        super(props);
     
    }
    
    render(){
        return (
           <a {...this.props}  className="link" />
        );
    }
}

export default Link;
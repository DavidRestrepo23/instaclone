import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const { children } = this.props; //Pasa la estructura (html) del padre "App.js"
        return (
            <div className="card">
                { children }
            </div>
        );
    }
}

export default Card;
import React, { Component } from 'react';


class Container extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { children } = this.props; //Pasa la estructura (html) del padre "App.js" al hijo Container.js

        return (
            <div className="container">
                { children }
            </div>
        );
    }
}

export default Container;
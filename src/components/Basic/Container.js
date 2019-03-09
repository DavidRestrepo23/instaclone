import React, { Component } from 'react';

const style = ( center ) => ({
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,

    
});

class Container extends Component{
    render(){
        const { children, center = false } = this.props; //Pasa la estructura (html) del padre "App.js" al hijo Container.js

        return (
            <div className="container" style={style(center)}>
                { children }
            </div>
        );
    }
}

export default Container;
import React, { Component } from 'react';


const style = ( block ) => ({
    background: '#00D1B2',
    color: '#fff',
    border:' 0px',
    borderRadius:' 4px',
    padding: '10px 15px',
    width: block ? '100%' : undefined,
});

class Button extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const { block } = this.props;
        return (
            <div className="content-button">
                <button {...this.props} style={style(block)} className="btn-login" />
            </div>
        );
    }
}

export default Button;
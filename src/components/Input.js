import React, { Component } from 'react';


class Input extends Component{
        
    constructor(props){
        super(props);
    }

    render(){
        const { label } = this.props;
        return (
            <div>
                <span className="span">{label}</span>
                <input {...this.props} className="input" />
            </div>
        );
    }
}

export default Input;
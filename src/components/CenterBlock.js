import React, { Component } from 'react';

class CenterBlock extends Component{

    constructor(props){
        super(props);
        
    }
    
    render(){
        const { children } = this.props;
        return (
            <div {...this.props} className="block-center" >
                { children }
            </div>
        );
    }
}

export default CenterBlock;
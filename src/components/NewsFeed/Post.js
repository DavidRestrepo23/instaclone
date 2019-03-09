import React, { Component } from 'react';
import { faHeart, faShareSquare, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Post extends Component {
    render(){
        const { image }  = this.props;
        return  (
            <div className="card">
                <img src={image} />
                <div className="card-body">
                    <div><FontAwesomeIcon icon={faHeart} /></div>
                    <div><FontAwesomeIcon icon={faComment} /></div>
                    <div><FontAwesomeIcon icon={faShareSquare} /></div>
                </div>
            </div>
        );
    }
}


export default Post;
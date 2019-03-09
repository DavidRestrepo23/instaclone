import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faCameraRetro, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
    render(){
        return (
            <header>
                <nav className="nav">
                    <ul>
                        <li><Link to="/app"> <FontAwesomeIcon icon={faCameraRetro} />  Insta-cool </Link></li>
                        <li><Link to="/app/profile"> <FontAwesomeIcon icon={faUser} /> </Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;
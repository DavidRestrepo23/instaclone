import React, { Component } from 'react';
import Container from '../../components/Basic/Container';
import Post from '../../components/NewsFeed/Post';


/** Este componente renderiza todos los post */

class Index extends Component {
    render(){
        return (
            <div>
                <Container center={false}>
                    <div  className="content-post">
                        <Post image="https://via.placeholder.com/300x200"></Post>
                        <Post image="https://via.placeholder.com/300x200"></Post>
                        <Post image="https://via.placeholder.com/300x200"></Post>
                        <Post image="https://via.placeholder.com/300x200"></Post>
                        <Post image="https://via.placeholder.com/300x200"></Post>
                    </div>
                </Container>
            </div>
        );
    }
}   

export default Index;
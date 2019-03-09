import React, { Component } from 'react';
import ProfileImg from '../../components/Profile/ProfileImg'
import Button from '../../components/Basic/Button';
import Card from '../../components/Basic/Card';

class Profile extends Component{
    render(){
        return(
            <div className="content-profile">
               <div className="profile">
                <ProfileImg />
                <Button>Agregar</Button>
               </div>
               <div className="profile" >
                    <Card><img src="https://via.placeholder.com/100x100" /></Card>
                    <Card><img src="https://via.placeholder.com/100x100" /></Card>
                    <Card><img src="https://via.placeholder.com/100x100" /></Card>
               </div>
               <div className="profile" >
                    <Card><img src="https://via.placeholder.com/100x100" /></Card>
                    <Card><img src="https://via.placeholder.com/100x100" /></Card>
                    <Card><img src="https://via.placeholder.com/100x100" /></Card>
               </div>
            </div>
        );
    }
}

export default Profile;
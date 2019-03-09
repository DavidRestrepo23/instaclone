import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Basic Component
import Card from '../../components/Basic/Card';
import Container from '../../components/Basic/Container';
import Input from '../../components/Basic/Input';
import Button from '../../components/Basic/Button';
import Title from '../../components/Basic/Title';
import CenterBlock from '../../components/Basic/CenterBlock';



class Login extends Component {
    render(){
        return (
            <Container center={true}>
            <Card>
                <Title>Registro</Title>
                <Input placeholder='Correo' type="text" label="Correo" />
                <Input placeholder='Contraseña' type="password" label="Contraseña" />
                <br />
                <Button block={true.toString()}>Ingresar</Button>
                <CenterBlock>
                  <Link to="/login" className="link">Iniciar sesión</Link>
                </CenterBlock>
            </Card>
          </Container>
        );
    }
}

export default Login;
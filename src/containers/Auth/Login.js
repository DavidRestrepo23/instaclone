import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import CenterBlock from '../../components/CenterBlock';

class Login extends Component {
    render(){
        return (
            <Container>
            <Card>
                <Title>Iniciar sesión</Title>
                <Input placeholder='Correo' type="text" label="Correo" />
                <Input placeholder='Contraseña' type="password" label="Contraseña" />
                <br />
                <Button block={true.toString()}>Ingresar</Button>
                <CenterBlock>
                  <Link to="/register" className="link">Ir al registro</Link>
                </CenterBlock>
            </Card>
          </Container>
        );
    }
}

export default Login;
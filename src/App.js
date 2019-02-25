import React, { Component } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Link from './components/Link';
import CenterBlock from './components/CenterBlock';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
            <Card>
                <Title>Iniciar sesión</Title>
                <Input placeholder='Correo' type="text" label="Correo" />
                <Input placeholder='Contraseña' type="password" label="Contraseña" />
                <br />
                <Button block={true.toString()}>Ingresar</Button>
                <CenterBlock>
                  <Link>Ir al registro</Link>
                </CenterBlock>
                
            </Card>
          </Container>
      </div>
    );
  }
}

export default App;

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodo from './components/AddTodo';
import OpenTodos from './components/OpenTodos';
import CompletedTodos from './components/CompletedTodos';

function App() {
  return (
    <div >
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col  md={6}>
            <AddTodo />
            <OpenTodos />
            <CompletedTodos />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

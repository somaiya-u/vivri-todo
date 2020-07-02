import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todos";
import {Form, Button, Row, Col, Container} from "react-bootstrap";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    if(this.state.input && this.state.input.trim() !== '' ){
      this.props.addTodo(this.state.input);
      this.setState({ input: "" });
    }
    
  };

  render() {
    return (
      <div className="mt-3">
        <Form>
        <label><b>ADD ITEM</b></label>
        <Container>
          <Row className="justify-content-md-center mt-3">
            <Col md={10}>
              <Form.Control type="text" placeholder="Add New Todo"  onChange={e => this.updateInput(e.target.value)}
              value={this.state.input} />
            </Col>
            <Col md={2} >
              <Button variant="primary" onClick={this.handleAddTodo}>
               Add
              </Button>
            </Col>
          </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

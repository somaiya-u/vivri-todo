import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../store/actions/todos";
import {Row,Col, Button, Form, Container} from 'react-bootstrap';



export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isEdit: false,
        content: this.props.item.content
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleToggle() {
    this.props.toggleTodo(this.props.item.id);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.item.id);
  }

  handleEdit() {
    this.setState(state => ({
        isEdit: !state.isEdit
    }));
  }

  handleUpdate(e) {
    this.props.updateTodo(this.props.item.id,this.state.content);
    this.setState({
        isEdit: false
    });
  }

  handleChange(e) {
    this.setState({
        content: e.target.value
    });
  }

  render() {
    return (
        <div className="mt-3">
            <Form>
                <Container>
                    <Form.Row>
                        <Col md={8}>
                            <input type="checkbox" onChange={this.handleToggle} checked={this.props.item.completed}/>
                                {
                                this.state.isEdit? <input className="todo-content" type="text" value={this.state.content} onChange={this.handleChange} />:
                                    <span>{this.props.item.content} </span>
                                }   
                        </Col>
                        <Col md={4}>
                            <Row className="justify-content-around">
                                {!this.state.isEdit && <Button className="edit-btn" variant="primary" onClick={this.handleEdit}>Edit</Button>}
                                {this.state.isEdit && <Button className="save-btn" variant="primary" onClick={(e) => this.handleUpdate(e)}>Save</Button>}
                                <Button className="delete-btn" variant="primary" onClick={this.handleDelete} >Delete</Button>
                            </Row>           
                        </Col>
                    </Form.Row>
                </Container> 
            </Form>
        </div>
    );
  }
}

export default connect(
    null,
    { toggleTodo, deleteTodo, updateTodo }
)(Todo);
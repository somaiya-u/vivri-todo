import React from "react";
import { connect } from "react-redux";
import {getCompletedTodos} from '../store/selectors';
import Todo from './Todo';
import {Row,Col} from 'react-bootstrap';

export class CompletedTodos extends React.Component {
  render() {
    return (
        <div className="mt-3">
            <label>
                <b>COMPLETED</b>
            </label>
            <Row>
                <Col md={12}>
                    {this.props.todos.map(todo=>
                    <Todo key={todo.id} item={todo} /> )}
                </Col>
                
            </Row>
        </div>  
    );
  }
}

const mapConnectToProps = (state) => {
    return {
        todos: getCompletedTodos(state)
    };
};

export default connect(
    mapConnectToProps,
  null
)(CompletedTodos);

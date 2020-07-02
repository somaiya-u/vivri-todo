import React from "react";
import { connect } from "react-redux";
import {getOpenTodos} from '../store/selectors';
import Todo from './Todo';
import {Col, Row} from 'react-bootstrap';

export class OpenTodos extends React.Component {
  render() {
    return (
        <div className="mt-3">
            <label>
                <b>TODO</b>
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
        todos: getOpenTodos(state)
    };
};

export default connect(
    mapConnectToProps,
  null
)(OpenTodos);

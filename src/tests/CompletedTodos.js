import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import {CompletedTodos} from '../components/CompletedTodos';
import Todo from '../components/Todo';

describe('<CompletedTodos /> Component test suite', () => {
  it('<CompletedTodos /> component should contain TODO label ', () => {
    const testProps = {todos:[{id:1,content:"1", completed: true},{id:1,content:"1", completed: true},{id:1,content:"1", completed: true}]};
    const wrapper = shallow(<CompletedTodos {...testProps}/>);
    expect(wrapper.contains( <label><b>COMPLETED</b></label>)).to.equal(true);
  });

  it('<CompletedTodos /> component should contain n no.of Todo component as passed todos length ', () => {
    const testProps = {todos:[{id:1,content:"1", completed: true},{id:1,content:"1", completed: true},{id:1,content:"1", completed: true}]};
    const wrapper = shallow(<CompletedTodos {...testProps}/>);
    expect(wrapper.find(Todo)).to.have.lengthOf(testProps.todos.length);
  });

});
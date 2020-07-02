import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import {OpenTodos} from '../components/OpenTodos';
import Todo from '../components/Todo';

describe('<OpenTodos /> Component test suite', () => {
  it('<OpenTodos /> component should contain TODO label ', () => {
    const testProps = {todos:[{id:1,content:"1", completed: false},{id:1,content:"1", completed: false},{id:1,content:"1", completed: false}]};
    const wrapper = shallow(<OpenTodos {...testProps}/>);
    expect(wrapper.contains( <label><b>TODO</b></label>)).to.equal(true);
  });

  it('<OpenTodos /> component should contain n no.of Todo component as passed todos length ', () => {
    const testProps = {todos:[{id:1,content:"1", completed: false},{id:1,content:"1", completed: false},{id:1,content:"1", completed: false}]};
    const wrapper = shallow(<OpenTodos {...testProps}/>);
    expect(wrapper.find(Todo)).to.have.lengthOf(testProps.todos.length);
  });

});
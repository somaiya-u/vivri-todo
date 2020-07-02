import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../App';
import AddTodo from '../components/AddTodo';
import OpenTodos from '../components/OpenTodos';
import CompletedTodos from '../components/CompletedTodos';

describe('<App /> Component test suite', () => {
  it('<App /> component should contain <AddTodo /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AddTodo)).to.have.lengthOf(1);
  });
  it('<App /> component should contain <OpenTodos /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(OpenTodos)).to.have.lengthOf(1);
  });
  it('<App /> component should contain <CompletedTodos /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CompletedTodos)).to.have.lengthOf(1);
  });
});
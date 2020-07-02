import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import {Form, Button} from "react-bootstrap";
import {spy} from 'sinon';


import {AddTodo} from '../components/AddTodo';

describe('<AddTodo /> Component test suite', () => {
  it('<App /> component should contain Form Control element to get todo content string ', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find(Form.Control)).to.have.lengthOf(1);
  });

  it('<App /> component should contain Form Button element to add a new todo', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find(Button)).to.have.lengthOf(1);
  });

  it('<App /> component state input should be initiliazied with empty string', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.state().input).to.equal('');
  });

  it('<App /> component updateInput method should update input state with passed value', () => {
    const wrapper = shallow(<AddTodo />);
    wrapper.instance().updateInput('test');
    expect(wrapper.state().input).to.equal('test');
  });

  it('<App /> component handleAddTodo method should call addTodo callback', () => {
    let testProps = {addTodo: ()=>{}};
    let spied = spy(testProps,'addTodo');
    const wrapper = shallow(<AddTodo {...testProps}/>);
    wrapper.instance().updateInput('test');
    wrapper.instance().handleAddTodo();
    assert(spied.calledOnce)
  });

  it('<App /> component handleAddTodo method should call addTodo callback with input state value', () => {
    let testProps = {addTodo: ()=>{}};
    let spied = spy(testProps,'addTodo');
    const wrapper = shallow(<AddTodo {...testProps}/>);
    wrapper.instance().updateInput('test');
    wrapper.instance().handleAddTodo();
    assert(spied.calledOnceWith('test'))
  });

  it('<App /> component handleAddTodo method should clear input after called', () => {
    let testProps = {addTodo: ()=>{}};
    const wrapper = shallow(<AddTodo {...testProps}/>);
    wrapper.instance().updateInput('test');
    wrapper.instance().handleAddTodo();
    expect(wrapper.state().input).to.equal('');
  });

  it('<App /> component handleAddTodo method should not call addTodo callback after initializing', () => {
    let testProps = {addTodo: ()=>{}};
    let spied = spy(testProps,'addTodo');
    const wrapper = shallow(<AddTodo {...testProps}/>);
    wrapper.instance().handleAddTodo();
    assert(spied.notCalled);
  });

  it('<App /> component handleAddTodo method should not call addTodo callback if input state is invalid string', () => {
    let testProps = {addTodo: ()=>{}};
    let spied = spy(testProps,'addTodo');
    const wrapper = shallow(<AddTodo {...testProps}/>);
    wrapper.instance().updateInput('');
    wrapper.instance().handleAddTodo();
    assert(spied.notCalled);
  });

});
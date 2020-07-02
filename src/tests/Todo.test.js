import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import {Todo} from '../components/Todo';
import {spy} from 'sinon';


describe('<Todo /> Component test suite', () => {
  it('<Todo /> component should contain edit button on initiliaze ', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    const button = wrapper.find('.edit-btn');
    expect(button.text()).to.be.eql('Edit');
  });

  it('<Todo /> component should contain delete button on initiliaze ', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    const button = wrapper.find('.delete-btn');
    expect(button.text()).to.be.eql('Delete');
  });
  
  it('<Todo /> component should contain save button when edit button is clicked ', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleEdit();
    const button = wrapper.find('.save-btn');
    expect(button.text()).to.be.eql('Save');
  });

  it('<Todo /> component should not contain Edit button when edit button is clicked ', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleEdit();
    const button = wrapper.find('.edit-btn');
    expect(button).to.be.empty;
  });
  
  it('<Todo /> component method handleToggle should call  toggleTodo from props callback', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    let spied = spy(testProps,'toggleTodo');
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleToggle();
    assert(spied.calledOnce)
  });

  it('<Todo /> component method handleToggle should call  toggleTodo with passed todo id', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    let spied = spy(testProps,'toggleTodo');
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleToggle();
    assert(spied.calledOnceWith(testProps.item.id))
  });

  it('<Todo /> component method handleDelete should call  deleteTodo with passed todo id', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    let spied = spy(testProps,'deleteTodo');
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleDelete();
    assert(spied.calledOnceWith(testProps.item.id))
  });

  it('<Todo /> component method handleDelete should call  deleteTodo with passed todo id', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    let spied = spy(testProps,'deleteTodo');
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleDelete();
    assert(spied.calledOnceWith(testProps.item.id))
  });

  it('<Todo /> component method handleEdit should toggle the state of isEdit', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    expect(wrapper.state().isEdit).to.be.eql(false);
    wrapper.instance().handleEdit();
    expect(wrapper.state().isEdit).to.be.eql(true);
  });

  it('<Todo /> component method handleUpdate should call  updateTodo callback from props', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    let spied = spy(testProps,'updateTodo');
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleUpdate();
    assert(spied.calledOnce);
  });

  it('<Todo /> component method handleUpdate should call  updateTodo callback with passed id and state content', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    let spied = spy(testProps,'updateTodo');
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.setState({input:"test"});
    wrapper.instance().handleUpdate();
    assert(spied.calledOnceWith(testProps.item.id,"test"))
  });

  it('<Todo /> component method handleUpdate should update isEdit as false', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleEdit() // To toggle edit state first
    expect(wrapper.state().isEdit).to.be.eql(true);
    wrapper.instance().handleUpdate();
    expect(wrapper.state().isEdit).to.be.eql(false);
  });

  it('<Todo /> component method handleChange should update content state with passed event target text', () => {
    const testProps = {toggleTodo:()=>{}, deleteTodo:()=>{}, updateTodo:()=>{},item:{id:1,content:"test",completed:false}};
    const wrapper = shallow(<Todo {...testProps}/>);
    wrapper.instance().handleChange({target:{value:"test"}});
    expect(wrapper.state().content).to.be.eql("test");
  });

});
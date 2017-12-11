import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TodoPage from './';
import { Router } from 'react-router';

describe('ToDoPage', () => {
  
  it('renders without crashing', () => {
    const wrapper = shallow(<TodoPage />); 
    expect(shallowToJson(wrapper.children)).toMatchSnapshot();
  });

  it('should have props', () => {
    const wrapper = mount(<Router ><TodoPage /></Router>); 
    console.log(wrapper.props());
  })
})
  
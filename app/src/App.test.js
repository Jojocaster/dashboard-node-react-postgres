import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './app';

describe('App', () => {
  // const wrapper = mount(<App />);
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a main container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app').length).toBe(1);
  })

  it('should have one Sidebar component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.sidebar').length).toBe(1);
  })

  it('should have on section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('section').length).toBe(1);
  })
})
  
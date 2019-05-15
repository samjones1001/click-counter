import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapeter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapeter() })

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const appComponent = wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1);
  });

  it('renders an increment button', () => {
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  });

  it('renders a counter', () => {
    const counter = wrapper.find("[data-test='counter-display']");
    expect(counter.length).toBe(1);
  })
})

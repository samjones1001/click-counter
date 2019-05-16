import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapeter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapeter() })

describe('App', () => {
  let wrapper;

  const setup = (props = {}, state = null) => {
    return shallow(<App { ... props } />)
  }

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without crashing', () => {
    const appComponent = wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1);
  });

  it('renders an increment button', () => {
    const button = wrapper.find("[data-test='increment-button']");
    expect(button.length).toBe(1);
  });

  it('renders a decrement button', () => {
    const button = wrapper.find("[data-test='decrement-button']");
    expect(button.length).toBe(1)
  });

  it('renders a counter', () => {
    const counter = wrapper.find("[data-test='counter-display']");
    expect(counter.length).toBe(1);
  });

  it('the counter starts at 0', () => {
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
  });

  it('increments the counter on increment button click', () => {
    const counter = 5
    wrapper.setState({ counter });
    const button = wrapper.find("[data-test='increment-button']");
    button.simulate('click');
    wrapper.update();
    const counterDisplay = wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.text()).toContain(counter +1);
  });

  it('decrements the counter on decrement button click', () => {
    const counter = 5;
    wrapper.setState({ counter });
    const button = wrapper.find("[data-test='decrement-button']");
    button.simulate('click');
    wrapper.update();
    const counterDisplay = wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.text()).toContain(counter -1);
  });
})

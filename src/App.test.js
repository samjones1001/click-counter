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

  describe('On intitial render', () => {
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

    it('is not in error mode', () => {
      const initialErrorModeState = wrapper.state('errorMode');
      expect(initialErrorModeState).toBeDefined();
      expect(initialErrorModeState).toBeFalsy();
    })
  });

  describe('on incrementing', () => {

    const findButtonAndIncrement = () => {
      const button = wrapper.find("[data-test='increment-button']");
      button.simulate('click');
      wrapper.update();
    }

    it('increments the counter on increment button click', () => {
      const counter = 5
      wrapper.setState({ counter });
      findButtonAndIncrement();
      const counterDisplay = wrapper.find("[data-test='counter-display']");
      expect(counterDisplay.text()).toContain(counter +1);
    });

    it('exits error mode if incremented', () => {
      wrapper.setState({ counter: 0, errorMode: true });
      findButtonAndIncrement();
      const errorModeState = wrapper.state('errorMode');
      expect(errorModeState).toBeFalsy();
    });

    it('removes the error message once out of error mode', () => {
      wrapper.setState({ errorMode: true });
      findButtonAndIncrement();
      const component = wrapper.find("[data-test='component-app']");
      expect(component.text()).not.toContain("ERROR")
    });
  })

  describe('on decrementing', () => {

    const findButtonAndDecrement = () => {
      const button = wrapper.find("[data-test='decrement-button']");
      button.simulate('click');
      wrapper.update();
    }

    it('decrements the counter on decrement button click', () => {
      const counter = 5;
      wrapper.setState({ counter });
      findButtonAndDecrement();
      const counterDisplay = wrapper.find("[data-test='counter-display']");
      expect(counterDisplay.text()).toContain(counter -1);
    });

    it('will not decrement the counter below 0', () => {
      wrapper.setState({ counter: 0 });
      findButtonAndDecrement();
      const counterDisplay = wrapper.find("[data-test='counter-display']");
      expect(counterDisplay.text()).toContain('0');
    });

    it('enters error mode if attempting to decrement below 0', () => {
      wrapper.setState({ counter: 0 });
      findButtonAndDecrement();
      const errorModeState = wrapper.state('errorMode');
      expect(errorModeState).toBeTruthy();
    });

    it('displays an error message if in error mode', () => {
      wrapper.setState({ errorMode: true });
      const component = wrapper.find("[data-test='component-app']");
      expect(component.text()).toContain("ERROR")
    });
  })
})

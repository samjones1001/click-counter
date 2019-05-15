import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapeter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapeter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

it('renders an increment button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("button");
  expect(button.length).toBe(1);
});

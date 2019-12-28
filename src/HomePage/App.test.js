// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App Component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
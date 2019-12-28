// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import DetailCard from './DetailCard';

describe("DetailCard Component", () => {
  it("should render my component", () => {
    const baseProps = {
      data: [],
    }
    const wrapper = shallow(<DetailCard {...baseProps}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from './SearchComponent';

describe("SearchComponent Component", () => {
  const wrapper = shallow(<SearchComponent />);
  it("should render my component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should check value change for text field", () => {
    const component = shallow(<SearchComponent />);
    const textField = component.find("SearchComponent__StyledTextField");
    textField.simulate("change", { target: { value: "foo" }});
    expect(component.state('textSearch')).toEqual('foo');
  });

  it("should check value of select input", () => {
    const baseProps = {
      sortData: jest.fn(),
      handleChange: jest.fn(),
    }
    const component = shallow(<SearchComponent {...baseProps}/>);
    const textField = component.find("SearchComponent__StyledSortTextField");
    textField.simulate("change", { target: { value: "asc" }});
    expect(component.state('sortType')).toEqual('asc');
  });

  it("should check button click", () => {
    const baseProps = {
      sortData: jest.fn(),
      handleChange: jest.fn(),
    }
    const component = shallow(<SearchComponent {...baseProps}/>);
    const button = component.find("SearchComponent__StyledButton");
    button.simulate("click");
    expect(baseProps.handleChange.mock.calls.length).toEqual(1);
  });
});
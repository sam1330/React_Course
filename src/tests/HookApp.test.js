import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('<HookApp /> Tests', () => {

  test('Should show correctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
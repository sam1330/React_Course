import React from "react";

import { shallow } from "enzyme";

import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe("<RealExampleRef /> tests", () => {

  const wrapper = shallow(<RealExampleRef />);

  
  test('should render <RealExampleRef /> component', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('should render <MultipleCustomHooks /> component', () => {

    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

  });
});
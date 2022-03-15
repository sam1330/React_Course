import React from "react";
import { shallow } from "enzyme";

import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("tests on <MultipleCustomHooks />", () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => { }
    });
  });

  test('should show component correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();

  });


  test('should show info correctly', () => {
    useFetch.mockReturnValue({
      data: [{
        author: "Sammy",
        quote: "Hello world",
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hello world');
    expect(wrapper.find('footer').text().trim()).toBe('Sammy');

  });
});
import { mount } from "enzyme";
import React from "react";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("<LoginScreen /> tests", () => {

  const setUser = jest.fn();
  
  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should execute setUser fn with argument', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({
      id: 1,
      name: "Sammy",
      email: "sammy1301@gmail.com"
    });
  });
});
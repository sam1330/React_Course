import { mount, shallow } from "enzyme";
import React from "react";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("<HomeScreen /> tests", () => {

  const user = {
    name: "Sammy",
    email: "sammy13@g.com"
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  
  test('should render component correctly', () => {

    expect(wrapper).toMatchSnapshot();

  });
});
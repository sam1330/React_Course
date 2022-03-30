import React from "react";
import { mount } from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("<AppRouter /> tests", () => {

  const user = {
    name: "Sammy",
    email: "sammy13@g.com"
  };

  const wrapper = mount(
    <UserContext.Provider value={ { user } }>
      <AppRouter />
    </UserContext.Provider>
  );

  test('should render correctly', () => {

    expect(wrapper).toMatchSnapshot();

  });
});
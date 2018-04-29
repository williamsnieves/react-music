import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./index";

describe("Search List component test", () => {
  it("should render a search component", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(".Search").length).toBe(1);
  });

  it("should mount in a full DOM", () => {
    expect(
      mount(
        <MuiThemeProvider>
          <Search />
        </MuiThemeProvider>
      ).find(Search).length
    ).toBe(1);
  });
});

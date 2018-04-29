import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";

import Player from "./index";

describe("Player suite test", () => {
  it("should render a search component", () => {
    const wrapper = shallow(<Player />);
    expect(wrapper.find(".Player").length).toBe(1);
  });

  it("should mount in a full DOM", () => {
    expect(mount(<Player />).find(Player).length).toBe(1);
  });
});

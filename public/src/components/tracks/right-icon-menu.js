import React from "react";

import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButtonElement from "./icon-button-element";

const rightIconMenu = (
  <IconMenu
    iconButtonElement={IconButtonElement}
    onItemClick={() => console.log("parent")}
  >
    <MenuItem>Play track</MenuItem>
  </IconMenu>
);

export default RightIconMenu;

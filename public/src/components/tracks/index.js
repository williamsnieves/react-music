import React from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButtonElement from "./icon-button-element";
import IconButton from "material-ui/IconButton";
import Clear from "material-ui/svg-icons/content/clear";

const Tracks = ({ tracks, onPress, onClose }) => {
  return (
    <div>
      <IconButton touch={true} onClick={() => onClose()}>
        <Clear color="#ccc" />
      </IconButton>
      <List>
        <Subheader>Tracks</Subheader>
        {tracks.map(track => {
          return (
            <div key={track.id}>
              <ListItem
                rightIconButton={
                  <IconMenu
                    iconButtonElement={IconButtonElement}
                    onItemClick={() => onPress(track.title, track.preview)}
                  >
                    <MenuItem>Play track</MenuItem>
                  </IconMenu>
                }
                primaryText={track.title}
              />
              <Divider inset={true} />
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default Tracks;

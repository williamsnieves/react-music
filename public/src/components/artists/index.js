import React from "react";
import "./artists.scss";
import { Card, CardHeader, CardMedia, CardTitle } from "material-ui/Card";

const Artists = ({ albums, onPress }) => {
  const renderAlbums = albums.map((album, key) => {
    return (
      <div
        key={album.id}
        onClick={tracklist => onPress(album.id)}
        className="Artists-item"
      >
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar={album.artist.picture_medium}
          />
          <CardMedia
            overlay={
              <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
            }
          >
            <img src={album.cover_big} alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
        </Card>
      </div>
    );
  });
  return <div className="Artists">{renderAlbums}</div>;
};

export default Artists;

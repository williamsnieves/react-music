import React, { Component } from "react"
import ArtistsContainer from "./artists-container"
import TracklistContainer from "./tracklist-container"
import PlayerContainer from "./player-container"

export default class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTracks: false,
      albumId: "",
      trackOptions: null
    }
  }
  onPlayTrack(title, preview) {
    this.setState({
      trackOptions: {
        title,
        preview
      }
    })
  }

  onCloseTracks() {
    this.setState({
      showTracks: false
    })
  }
  showTracklist(show, albumId) {
    this.setState({
      showTracks: show,
      albumId
    })
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.showTracks && (
          <ArtistsContainer
            showTracklist={(show, albumId) => this.showTracklist(show, albumId)}
          />
        )}
        {this.state.showTracks && (
          <TracklistContainer
            onCloseTracks={() => this.onCloseTracks()}
            onPlayTrack={(title, preview) => this.onPlayTrack(title, preview)}
            albumId={this.state.albumId}
          />
        )}

        <PlayerContainer options={this.state.trackOptions} />
      </React.Fragment>
    )
  }
}

import React, { Component } from "react"
import CircularProgress from "material-ui/CircularProgress"
import Tracks from "../components/tracks"

export default class TracklistContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: null
    }
  }

  onPlayTrack(title, preview) {
    this.props.onPlayTrack(title, preview)
  }

  onClose() {
    this.props.onCloseTracks()
  }
  componentDidMount() {
    const { albumId } = this.props
    const tracksUrl = `http://localhost:3000/tracks/${albumId}`
    fetch(tracksUrl)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Something went wrong")
      })
      .then(responseJson => {
        this.setState({
          tracks: responseJson.data
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return this.state.tracks ? (
      <Tracks
        tracks={this.state.tracks}
        onClose={() => this.onClose()}
        onPress={(title, preview) => this.onPlayTrack(title, preview)}
      />
    ) : (
      <CircularProgress />
    )
  }
}

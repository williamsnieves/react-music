import React, {Component} from 'react'
import ArtistsContainer from './artists-container'
import TracklistContainer from './tracklist-container'
import PlayerContainer from './player-container'
export default class MainContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			showTracks: false,
			albumId: ''
		}
	}
	showTracklist (show, albumId) {
		this.setState( {
			showTracks: show,
			albumId
		})
	}
	render () {
		return (
		<React.Fragment>
      {!this.state.showTracks && <ArtistsContainer showTracklist={(show, albumId) => this.showTracklist(show, albumId)}/>}
      {this.state.showTracks && <TracklistContainer albumId={this.state.albumId} />}

      <PlayerContainer /> 
		</React.Fragment>
		)
	}
}
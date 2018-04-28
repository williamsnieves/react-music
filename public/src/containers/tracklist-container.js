import React, {Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import Tracks from '../components/tracks'

export default class TracklistContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tracks: null
    }
  }
  componentDidMount () {
    const {albumId} = this.props
    const tracksUrl = `http://localhost:3000/tracks/${albumId}`
    fetch(tracksUrl)
      .then(response => {
        if(response.ok) {
        	return response.json()
      	} else {
    			throw new Error('Something went wrong')
    		}
    	})
    	.then(responseJson => {
    		this.setState({
					tracks: responseJson.data
    		})

    	})
    	.catch(error => console.log(error))
	}
	render () {
		console.log(this.state.tracks)
		return this.state.tracks ? <Tracks tracks={this.state.tracks} /> : <CircularProgress />  
	}
}
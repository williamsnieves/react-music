import React, {Component} from 'react'

export default class PlaylistContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			tracks: []
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
    		console.log("RESPONSE------", responseJson)
    		this.setState({
					tracks: responseJson.data
    		})

    	})
    	.catch(error => console.log(error))
	}
	render () {
		return (
			<div>
				playlist container
			</div>
		)
	}
}
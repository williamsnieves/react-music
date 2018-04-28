import React, {Component} from 'react'
import Artists from '../components/artists/'
import Search from '../components/search/'
import ArtistsLayout from '../components/layouts/artists-layout'

class ArtistsContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			albums: [],
      defaultArtist: 'helloween'
		}
	}
  componentDidMount () {
    fetch('http://localhost:3000/albums')
    	.then(response => {
    		if(response.ok) {
    			return response.json()
    		} else {
    			throw new Error('Something went wrong')
    		}
    	})
    	.then(responseJson => {
    		this.setState({
					albums: responseJson.data
    		})

    	})
    	.catch(error => console.log(error))
  }
  getArtistData (artist) {
    artist = (artist === '') ? this.state.defaultArtist : artists
  	fetch(`http://localhost:3000/search?term=${artist}`)
	    	.then(response => {
	    		if(response.ok) {
	    			return response.json()
	    		} else {
	    			throw new Error('Something went wrong')
	    		}
	    	})
	    	.then(responseJson => {
	    		this.setState({
						albums: responseJson.data
	    		})

	    	})
	    	.catch(error => console.log(error))
  }
  handleSearchTerm (ev, newValue) {
    console.log('WI WILL SEARCH SOMETHING', newValue)
    this.getArtistData(newValue)
  }

  onShowTracklist (albumId) {
    console.log('tracklist:', albumId)
    this.props.showTracklist(true, albumId)
  }
  render () {
    return (
      <div>
        <ArtistsLayout>
          <Search onChange={(ev, newValue) => this.handleSearchTerm(ev, newValue)} />
          <Artists albums={this.state.albums} onPress={(tracklist) => this.onShowTracklist(tracklist)} />
        </ArtistsLayout>
      </div>
    )
  }
}

export default ArtistsContainer

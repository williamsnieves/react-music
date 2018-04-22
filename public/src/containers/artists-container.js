import React, {Component} from 'react'
import Artists from '../components/artists/'
import Search from '../components/search/'
import ArtistsLayout from '../components/layouts/artists-layout'

class ArtistsContainer extends Component {
	handleSearchTerm (ev, newValue) {
		console.log("WI WILL SEARCH SOMETHING", newValue)
	}
	render () {
		return (
			<div>
				<ArtistsLayout>
					<Search onChange={(ev, newValue) => this.handleSearchTerm(ev, newValue)} />
					<Artists />
				</ArtistsLayout>
			</div>
		)
	}
}


export default ArtistsContainer
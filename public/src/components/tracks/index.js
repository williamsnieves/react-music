import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const Tracks = ({tracks}) => {

	return (
		<List>
	        <Subheader>Tracks</Subheader>
	        {
	        	tracks.map(track => {
	        		return (
	        			<div key={track.id}>
	        				<ListItem primaryText={track.title}/>
	        				<Divider inset={true} />
	        			</div>
	        		)		
	        	})
	        }
        </List>
	)
}

export default Tracks
import React from 'react'
import Audio from 'react-audioplayer'
import './player.scss'

const Player = ({title, preview}) => {
	const songObject = [{
		name: title,
		src: preview
	}]
	return (
		<div className="Player">
			<Audio
			  width={600}
			  height={400}
			  autoPlay={true}
			  playlist={[songObject]}
			/>
		</div>
	)
}

export default Player
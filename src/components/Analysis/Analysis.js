import React from 'react'
import './Analysis.css'
const Analysis=({genres})=>{

	// If no file is uploaded

	if(genres==null){
		return(
		<div className='container'>
			<h2>Please upload the song first(and make sure that it should have a duration of at least 60sec)</h2>
		</div>
	);
	}

	return(
		<div className='container'>
			<h1>Music Genre Analysis</h1>
			<p>(Swipe down to see more)</p>
			<h3>Blues:{genres[1]}%</h3>
			<h3>Classical:{genres[1]}%</h3>
			<h3>Country:{genres[2]}%</h3>
			<h3>Disco:{genres[3]}%</h3>
			<h3>Hip-hop:{genres[4]}%</h3>
			<h3>Jazz:{genres[5]}%</h3>
			<h3>Metal:{genres[6]}%</h3>
			<h3>Pop:{genres[7]}%</h3>
			<h3>Reggae:{genres[8]}%</h3>
			<h3>Rock:{genres[9]}%</h3>

		</div>

	);
}

export default Analysis;

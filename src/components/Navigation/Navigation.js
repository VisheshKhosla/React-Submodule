import React from 'react'

const Navigation=({onRouteChange})=>{
	return(
		<nav style={{display:'flex',justifyContent:'flex-end'}} >

			<a href='https://github.com/VisheshKhosla/Music-Genre-Classifier-' target='_blank' rel="noreferrer noopener" className='f3 link dim black underline pa3 pointer'>More about the project</a>
			<a href='https://in.linkedin.com/in/vishesh-khosla-8a4525100' target='_blank' rel="noreferrer noopener" className='f3 link dim black underline pa3 pointer' >About me</a>
		</nav>
	);
}

export default Navigation;
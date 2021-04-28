import React from 'react'
import './DescriptionUpload.css'
const Desciption_Upload=({onFileChange,onFileUpload})=>{
	return(
		<div>
			<h2 className='f3 center box'>
				Using  Audio preprocessing and then feeding the MFCCs to the Convolutional Neural network model for genre-analysis 
				of the song.<br/>
				Configuration of the Neural network:<br/>
				Activation Function:Relu(Convolutional and hidden layers) and Softmax(Output layer).<br/>
				Loss Function:Sparse Categorical cross entropy.<br/>
				Optimizer:Adam Optimizer.<br/>
				Dropout Probability:0.3.<br/>
			</h2>
			<p className='f3 center'>
				This magic Brain will do the genre-analysis of your song.Give it a try....
			</p>
			<div className='center form pattern'>
			    <div className='center'>
		             <input className='f4 pa2 w-100 ' type='file' onChange={onFileChange}/>
		             <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple ' onClick={onFileUpload}>Analyse</button>
	            </div>
			</div>
		</div>

	);
}
export default Desciption_Upload;

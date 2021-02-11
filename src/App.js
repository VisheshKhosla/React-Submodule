import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import DescriptionUpload from './components/DescriptionUpload/DescriptionUpload.js'
import Particles from 'react-particles-js';
import Analysis from './components/Analysis/Analysis.js'
import axios from 'axios';

class  App extends Component {
  constructor(){
    super();
    this.state={
      selectedFile:null,
      genres:null
    }
  }
  componentDidMount() {
    document.title = 'Music-Genre Analysis';
  }

   // Changing the state of the file 

  onFileChange=(event)=>{
    this.setState({selectedFile:event.target.files[0]});
  }

  
  onFileUpload=()=>{
    if(this.state.selectedFile==null)return;
    // FormData:Data Transfer mode(like JSON)

    let formData=new FormData();
    formData.append('myfile',this.state.selectedFile);
    formData.append('file_name',this.state.selectedFile.name);

    // Post Request 

    axios.post(" http://127.0.0.1:5000/uploadfile",formData)
    .then(res=>this.setState({genres:res.data.music_prediction}));
  }

  render(){
    return (
      <div className="App">
        <Particles className='particle-canvas'
              params={{
                particles: {
                  number:{
                    value:100,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  }
                }
              }}
            />
          <div>
            <Navigation/>
            <Logo />
            <DescriptionUpload onFileChange={this.onFileChange} onFileUpload={this.onFileUpload}/>
            <Analysis genres={this.state.genres} />
          </div>
      </div>
    );
  }
}

export default App;

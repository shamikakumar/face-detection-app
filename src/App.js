import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceDetection from './components/FaceDetection/FaceDetection'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

import './App.css';

const app=new Clarifai.App({
  apiKey: '9cac76f596044520a0080cd954ca2e4c'
});
const particlesOptions ={
  particles: {
    number:{
      value:80,
      density:{
        enable: true,
        value_area:800
      }
    }
  }
}
  class App extends Component{
    constructor(){
      super();
      this.state = {
        input: '',
        imageUrl:''
      }
      }
    
      onInputChange = (event) => {
        this.setState({input:event.target.value});
      }

      onButtonSubmit = () =>{
        this.setState({imageUrl: this.state.input});
        app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
        function(response){

        },
        function(err){

        }
        );
      }
    render(){
      return (
        <div className="App">
          <Particles className='particles'
          params={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
          <FaceDetection imageUrl={this.state.imageUrl}/>
        </div>
      );
    }
  }

export default App;

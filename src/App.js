import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';


class App extends Component {
  state={
    ImgVisible: true,
  };


  setImgVisible = () =>{
    this.setState({
      ImgVisible: this.state.ImgVisible=!this.state.ImgVisible,
    }

    );
  }
  componentDidUpdate(){
    if(this.state.ImgVisible === true){
      alert("Компонент появился")
    }
    if(this.state.ImgVisible === false){
      alert("Компонент закрылся")
    }
  }
  render() {
    return (
      <div className="App-header">
        <button onClick={() => this.setImgVisible(!this.state.ImgVisible)}>{this.state.ImgVisible ? "hide" : "show"}</button>
        {this.state.ImgVisible && <img src={logo} className="App-logo" alt="logo" />}
      </div>
    );
  }
}

export default App;

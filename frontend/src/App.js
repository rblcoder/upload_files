import logo from './logo.svg';
import './App.css';
import Upload from './Upload.js';
import UploadVideoAudio from './UploadVideoAudio.js';
import React, { Component } from "react"

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        url: "",
        uploadtime: ""
      },
      uploads: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/uploads/');
        const uploads = await res.json();
        this.setState({
          uploads
        });
      } catch (e) {
        console.log(e);
    }
    }

    renderItems = () => {
        return  this.state.uploads.map(item => (
              <div>
                <h1>url: {item.url}</h1>
                <span>uploadtime: {item.uploadtime}</span>
              </div>
              ))

    }

    render() {
      return (
        <main className="content">
        <div className="row">
         <Upload />
         </div>
         <div className="row">
         <UploadVideoAudio />
         </div>
{/*        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>*/}
      </main>
      )
    }
  }

export default App;

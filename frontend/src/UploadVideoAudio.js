import React from 'react';
import { baseURL } from './global';

export default class UploadVideoAudio extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }
    onChangeHandler = (event: any) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });

        console.log(event.target.files[0]);
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData();
        const { selectedFile } = this.state;
        formData.append("url", selectedFile);
        fetch(baseURL + '/api/uploads/', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
            .then((data) => document.getElementById('show-file').innerHTML = `<video width=100% controls key=${data.url}>`+
                        `<source src=${data.url} /> `  +
                        "</video>"  );
    };

     showFile = () => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
             var preview = document.getElementById('show-file');
             var file = document.querySelector('input[type=file]').files[0];
             preview.url = file.name;
//             var reader = new FileReader()
//
//             var textFile = /text.*/;
//
//             if (file.type.match(textFile)) {
//                reader.onload = function (event) {
//                   preview.value = event.target.result;
//                }
//             } else {
//                preview.value = "<span class='error'>It doesn't seem to be a text file!</span>";
//             }
//             reader.readAsText(file);
//
//       } else {
//          alert("Your browser is too old to support HTML5 File API");
       }
      }
    render() {
        return (
             <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card p-3">

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload an audio (.mp3) or video (.mp4) file: <br /><br />
                        <input type="file" className="btm" accept=".mp3,.mp4" name="file" onChange={this.onChangeHandler} />

                    </label>
                    <br/><br/>
                    <button type="submit"  class="btn btn-primary btn-block mb-4">
                        Upload
                    </button>


                </form>
                <form>
                 <div id="show-file" class="row mb-4">

                 </div>
                </form>

            </div >
            </div>
        );
    }
}
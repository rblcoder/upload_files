import React from 'react';

import { baseURL } from './global';

export default class Upload extends React.Component<any, any> {
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
        this.showFile()
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
        });
    };

     showFile = () => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
             var preview = document.getElementById('show-text');
             var file = document.querySelector('input[type=file]').files[0];
             var reader = new FileReader()

             var textFile = /text.*/;

             if (file.type.match(textFile)) {
                reader.onload = function (event) {
                   preview.value = event.target.result;
                }
             } else {
                preview.value = "<span class='error'>It doesn't seem to be a text file!</span>";
             }
             reader.readAsText(file);

       } else {
          alert("Your browser is too old to support HTML5 File API");
       }
      }
    render() {
        return (
             <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card p-3">

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload a text file: <br /><br />
                        <input type="file" className="btm" accept=".txt" name="file" onChange={this.onChangeHandler} />

                    </label>
                    <br/><br/>
                    <button type="submit"  class="btn btn-primary btn-block mb-4">
                        Upload
                    </button>


                </form>
                <form>
                 <div class="row mb-4">
                <textarea class="form-control" id="show-text" rows="4" readOnly={true}>Choose a text file</textarea >
                 </div>
                </form>

            </div >
            </div>
        );
    }
}
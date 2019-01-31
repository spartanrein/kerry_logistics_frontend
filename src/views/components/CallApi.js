import React from 'react';

export default class CallApi extends React.Component {
  handleCallApi=() => {
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch('http://localhost:3000/api/qrcodes')
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      console.log(jsonResult);
    })
  }
  
    render() {
      return (
        <div>
            <button onClick={() => this.handleCallApi()}>
            Click here to call API
            </button>
        </div>
      )
    }
}

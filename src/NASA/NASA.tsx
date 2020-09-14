import React from "react";

export interface NASAProps {
  // location: Location
}

export interface Location {
  // latitude: number;
  // longitude: number;
}

export interface NASAState {
  NASAInformation: string;
}



class NASA extends React.Component<NASAProps, NASAState> {
  constructor(props: NASAProps) {
    super(props);
    this.state = { NASAInformation: ""};
  }

  componentDidMount() {
    
      const nasaURL = "https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=L4chJoMiegg07Kxfh4Fprho5kBMbQJxaJtyf5Qax"
      fetch(nasaURL)
      .then(response => response.blob())
    .then((myBlob) => {
      console.log(myBlob);
      // var blob = new Blob([img], {type: "image/png"})
      var objectURL = URL.createObjectURL(myBlob);
      this.setState({NASAInformation: objectURL})
      console.log(typeof myBlob);
      // document.querySelector('img').src = objectURL;
    });
  }

  render() {
    return (
      <div>
        NASA Image
        <img src={this.state.NASAInformation} alt=""/>
      </div>
    );
  }
}

export default NASA;

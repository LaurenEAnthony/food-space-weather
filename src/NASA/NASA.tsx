import React from "react";

export interface NASAProps {
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface NASAState {
  NASAInformation: string;
}

class NASA extends React.Component<NASAProps, NASAState> {
  constructor(props: NASAProps) {
    super(props);
    this.state = { NASAInformation: "" };
  }

  componentDidUpdate(prevProps: NASAProps) {
    if (this.props.location.latitude !== prevProps.location.latitude) {
      let latitude = this.props.location.latitude;
      let longitude = this.props.location.longitude;
      const nasaURL = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=2018-01-01&dim=0.15&api_key=L4chJoMiegg07Kxfh4Fprho5kBMbQJxaJtyf5Qax`;
      fetch(nasaURL)
        .then((response) => response.blob())
        .then((myBlob) => {
          console.log(myBlob);
          // var blob = new Blob([img], {type: "image/png"})
          var objectURL = URL.createObjectURL(myBlob);
          this.setState({ NASAInformation: objectURL });
          console.log(typeof myBlob);
          // document.querySelector('img').src = objectURL;
        });
    }
  }

  render() {
    return (
      <div>
        <h4 style={{backgroundColor: '#4E937A', padding: "10px"}}>NASA Image:</h4>
        <img src={this.state.NASAInformation} alt="" style={{height: "460px" }}/>
      </div>
    );
  }
}

export default NASA;

import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { lat: null, errorMessage: '' };
  //   }
  state = { lat: null };

  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderBody() {

    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
      if (!this.state.errorMessage && this.state.lat) {
      //   return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />
      }
      // return <Spinner loadText='Allow location access' />
      return <div><Spinner /></div>
  }
  render() {
      const border = {
          border: 'solid 10px cyan'
      }
  return <div className='border red' style={border}>{this.renderBody()}</div>
    
  }
}
ReactDom.render(<App />, document.querySelector('#root'));

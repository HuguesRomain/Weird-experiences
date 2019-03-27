import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasChart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount(){
    this.getChartdata(); 
  }

getChartdata(){
  //Ajax calls here
  this.setState({
    chartData: {
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[
        {
          label:'Population',
          data:[
            615794,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    }
  })
}
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{height: 2}}>
          <img src={logo} className='App-logo' alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CanvasChart chartData={this.state.chartData} location='Massachusetts' legendPosition='bottom' />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class CanvasChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right',
    location: 'City',
  }

  render () {
    return (
      <div>
        <Bar
        data={this.state.chartData}
        options={{ 
          title:{
           display: this.props.displayTitle,
           text: `Largest Cities in ${this.props.location}`,
           fontSize: 24,
          },
          legend:{
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
         }}
        />

        <Line
        data={this.state.chartData}
        options={{ 
          title:{
           display: this.props.displayTitle,
           text: `Largest Cities in ${this.props.location}`,
           fontSize: 24,
          },
          legend:{
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
         }}
        />

        <Pie
        data={this.state.chartData}
        options={{ 
          title:{
           display: this.props.displayTitle,
           text: `Largest Cities in ${this.props.location}`,
           fontSize: 24,
          },
          legend:{
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
         }}
        />
      </div>
    )
  }
}

export default CanvasChart
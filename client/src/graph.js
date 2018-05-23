import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import { Dropdown  } from 'semantic-ui-react'


class WaterConsumptionGraph extends Component {

  render() {
    let length=this.props.count;
    let graphData =this.props.data.slice(0,length)
  let wordsDetails =[];
  let TotalWords =[];
  graphData.map((data)=>{
    wordsDetails.push(data.name);
    wordsDetails.push(data.total);
    TotalWords.push(wordsDetails)
    wordsDetails=[];
  })
  const data = {
        columns:TotalWords,
        type: 'pie'
    };
    return (
      <div>
      <C3Chart data={data} />
    </div>
  );
}
}

export default WaterConsumptionGraph;

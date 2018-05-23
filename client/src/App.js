import React, { Component } from 'react';
import './App.css';
import { Table,Rating } from 'semantic-ui-react'
import PieGraph from './graph.js'
import request from 'superagent';
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
   data:[],
   count:1,
   pos:[' '],
   synm:[' ']
    };
  }
  componentWillMount(){

    var posarr=[];
    var synmarr=[];
    request
    .get('http://localhost:9080/api')
    .end((err,res) => {
        this.setState({
          data:res.body.slice(0,9)
        })
res.body.map((data)=>{
  request.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text='+data.name)
  .end((err,res) => {
    if(res.body.def.length>0 )
      {
        posarr.push(res.body.def[0].pos);
        synmarr.push(res.body.def[0].tr[0]);}
      else
      {posarr.push('na');}



    this.setState({pos:posarr,synm:synmarr})
})
})
  })
}

  handleChange = e => this.setState({ count: e.target.value })

// posValue(value){
//   request.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text='+value)
//   .end((err,res) => {
//     return {res.body.def.length>0 ?
//
// })
// }
  render() {
    console.log(this.state.synm);
    let length =this.state.data.length;
    const {count}=this.state;
    return (
      <div className="App">
        <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Word</Table.HeaderCell>
          <Table.HeaderCell>Count</Table.HeaderCell>
          <Table.HeaderCell>Synonym</Table.HeaderCell>
          <Table.HeaderCell>Pos</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>

        {this.state.data.map((data,i)=>{
        return(  <Table.Row>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.total}</Table.Cell>
            <Table.Cell>{this.state.pos[i]}</Table.Cell>
            <Table.Cell>jjhj</Table.Cell>
          </Table.Row>)
        })}


      </Table.Body>

    </Table>

    <input type='range' min={1} max={length} value={count} onChange={this.handleChange} />
{count >0 ?
    <PieGraph data={this.state.data} count={count} /> : null}
      </div>
    );
  }
}

export default App;

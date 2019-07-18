import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    initialArray: [
      {pmtDate: '20190701', pmtAmount: '1500'},
      {pmtDate: '20190702', pmtAmount: '1000'},
      {pmtDate: '20190701', pmtAmount: '1000'},
      {pmtDate: '20190802', pmtAmount: '1000'},
      {pmtDate: '20190709', pmtAmount: '1000'},
      {pmtDate: '20190709', pmtAmount: '1500'}
    ],

  };
}

  getMonth = (str) => {
    return str.substring(0,6)
  };

  sameMonthAndPrice = (arr, month, price) => {
    let result = arr.filter(x => this.getMonth(x.pmtDate) === month && x.pmtAmount === price)
    let count = result.length
    return count
  };

  sameDateAndPrice = (arr, date, price) => {
    let result = arr.filter(x => x.pmtAmount === price && x.pmtDate === date)
    let count = result.length
    return count
  };

  totalPaymentsToday = (arr, date) => {
    let updated = arr.filter(x => x.pmtDate === date)
    let result = 0
    for (var i = 0; i < updated.length; i++){
      if (updated[i].pmtAmount === '1000'){
        result += 1000
      }
      else {
        result += 1500
      }
    }
    return result
  };

  totalPaymentsThisMonth = (arr, month) => {
    let updated = arr.filter(x => this.getMonth(x.pmtDate) === month)
    let result = 0
    for (var i = 0; i < updated.length; i++){
      if (updated[i].pmtAmount === '1000'){
        result += 1000
      }
      else {
        result += 1500
      }
    }
    return result
  };

  render () {
    const {initialArray} = this.state
    const date = "20190701";
    console.log(this.sameMonthAndPrice(this.state.initialArray, '201907', '1000'));


  return (
    <div className="App">
    <h2> Payments Analysis </h2>
    <div>
    <ul>
    <li>
        Number of 1000 payments today:
        {this.sameDateAndPrice(this.state.initialArray, '20190709', '1000')}
    </li>
    <li>
        Number of 1500 payments today:
        {this.sameDateAndPrice(this.state.initialArray, '20190709', '1500')}
    </li>
    <li>
        Number of 1000 payments this month:
        {this.sameMonthAndPrice(this.state.initialArray, '201907', '1000')}
    </li>
    <li>
        Number of 1500 payments this month:
        {this.sameMonthAndPrice(this.state.initialArray, '201907', '1500')}

    </li>
    <li>
        Total payments today:
        {this.totalPaymentsToday(this.state.initialArray, '20190709')}
    </li>
    <li>
        Total payments this month:
        {this.totalPaymentsThisMonth(this.state.initialArray, '201907')}
    </li>
    </ul>
    </div>
    </div>
  );
}

}

export default App;

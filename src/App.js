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
      {pmtDate: '20190809', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1500'},
      {pmtDate: '20190701', pmtAmount: '1500'},
      {pmtDate: '20190702', pmtAmount: '1000'},
      {pmtDate: '20190701', pmtAmount: '1000'},
      {pmtDate: '20190802', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1500'}
    ],
    
  };
}

  getMonth = (str) => {
    return str.substring(0,6)
  };

  filterByCurrentMonth = (arr, month) => {
    let result = []
    for (var i = 0; i < arr.length; i++){
      if (this.getMonth(arr[i].pmtDate) === month){
         result.push(arr[i]);
      }
    }
    return result
    };

    updateArray = () => {
      this.setState({
        filtered: this.filterByCurrentMonth(this.state.initialArray, '201907')
      })
    };

  sameMonthAndPrice = (arr, month, price) => {
    let result = arr.filter(x =>  this.getMonth(x.pmtDate) === month && x.pmtAmount === price)
    let count = result.length
    return count
  };


  sameMonthAndPrice2 = (arr, price) => {
    let result = arr.filter(x => x.pmtAmount === price)
    let count = result.length
    return count
  }

  sameDateAndPrice = (arr, date, price) => {
    let result = arr.filter(x => x.pmtAmount === price && x.pmtDate === date)
    let count = result.length
    return count
  };

  totalPaymentsToday = (arr, date) => {
    return 1000 * this.sameDateAndPrice(arr, date, '1000') +
    1500 * this.sameDateAndPrice(arr, date, '1500')
  };

  totalPaymentsThisMonth = (arr, month) => {
    return 1000 * this.sameMonthAndPrice(arr, month, '1000') +
    1500 * this.sameMonthAndPrice(arr, month, '1500')
  };

  render () {
    const {initialArray} = this.state

    const initial = [
      {pmtDate: '20190701', pmtAmount: '1500'},
      {pmtDate: '20190702', pmtAmount: '1000'},
      {pmtDate: '20190701', pmtAmount: '1000'},
      {pmtDate: '20190802', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1500'},
      {pmtDate: '20190701', pmtAmount: '1500'},
      {pmtDate: '20190702', pmtAmount: '1000'},
      {pmtDate: '20190701', pmtAmount: '1000'},
      {pmtDate: '20190802', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1000'},
      {pmtDate: '20190809', pmtAmount: '1500'}
    ];

    const thisMonthOnly = this.filterByCurrentMonth(this.state.initialArray, '201907');

    /*console.time("Check 1");
    console.log(this.sameMonthAndPrice2(thisMonthOnly, '1000'));
    console.timeEnd("Check 1");

    console.time("Check 2");
    console.log(this.sameMonthAndPrice(this.state.initialArray, '201907', '1000'));
    console.timeEnd("Check 2");

    console.time("Check 3");
    console.log(this.sameDateAndPrice(thisMonthOnly, '20190701', '1000'));
    console.timeEnd("Check 3");

    console.time("Check 4");
    console.log(this.sameDateAndPrice(initial, '20190701', '1000'));
    console.timeEnd("Check 4");*/

  return (
    <div className="App">
    <h2> Payments Analysis </h2>
    <div>
    <ul>
    <li>
        Number of 1000 payments today:
        {this.sameDateAndPrice(thisMonthOnly, '20190709', '1000')}
    </li>
    <li>
        Number of 1500 payments today:
        {this.sameDateAndPrice(thisMonthOnly, '20190709', '1500')}
    </li>
    <li>
        Number of 1000 payments this month:
        {this.sameMonthAndPrice2(thisMonthOnly, '1000')}
    </li>
    <li>
        Number of 1500 payments this month:
        {this.sameMonthAndPrice2(thisMonthOnly, '1500')}

    </li>
    <li>
        Total payments today:
        {this.totalPaymentsToday(thisMonthOnly, '20190709')}
    </li>
    <li>
        Total payments this month:
        {this.totalPaymentsThisMonth(thisMonthOnly, '201907')}
    </li>
    </ul>
    </div>
    </div>
  );
}

}

export default App;

import React from 'react';
import TextInput from './TextInput.js'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stockticker: '', startdate: undefined, enddate: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStockTickerChange = this.handleStockTickerChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }
  handleStockTickerChange(value) {
    this.setState({stockticker: value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.stockticker, this.state.startdate, this.state.enddate);
  }
  handleStartDateChange(startdate) {
    this.setState({startdate: startdate});
  }
  handleEndDateChange(enddate) {
    this.setState({enddate: enddate});
  }

  render() {
    return (
      <form>
        <TextInput name='stockticker' label='Stock Ticker' value={this.state.stockticker} onChange={this.handleStockTickerChange}/>
        <DatePicker selected={this.state.startdate} onChange={this.handleStartDateChange} />
        <DatePicker selected={this.state.enddate} onChange={this.handleEndDateChange} />
        <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
export default Inputs;

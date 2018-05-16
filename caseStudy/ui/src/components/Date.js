/**
 * Copyright 2018 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




/* Display a date picker component for the start date of the range for your line chart.
 *
 * Take a look at the react-datepicker for a DatePicker component
 * It is already provided as a part of the package.json. You may use
 * another package for this component if you'd like.
 * https://www.npmjs.com/package/react-datepicker
 * https://hacker0x01.github.io/react-datepicker/
 */

import React from 'react';
import DatePicker from 'react-datepicker'; 
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
class Date extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            date: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.onChange(this.state.date);
    }

    handleChange(date) {
        this.setState({date: date});
        // this.props.onChange(date);
    }

    render() {
        return (
            <div className="date">
                <p><strong>{this.props.text}</strong></p>
                <div className="date-input">
                    <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                </div>
            </div>
        );
    }


}
export default Date;
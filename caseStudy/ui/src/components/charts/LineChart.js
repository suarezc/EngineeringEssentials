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

import React from 'react';
import Highcharts from 'highcharts';

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        Highcharts.chart('chart', {
            title: {
                text: 'Sample Company'
              },
            series: [{
                name: 'Prices',
                data: this.props.data
            }]
        });
    }

    componentWillReceiveProps(props) {
        console.log("New data received to redraw chart.");
        const dataarray = this.state.cards.map((card, index) => (
            <Card author={card.author}
              text={card.text}
              key={index}
              tags={card.tags}
              dateStamp={card.dateStamp} />
          ));
        /**
         * TODO
         * Parse the data received from props, a Javascript object, to map to a Javascript array
         * required by the type of line chart chosen and set it in the series. Use Date.UTC(..)
         * to create the x-axis.
         */
        
           this.chart.series[0].setData(data);
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    render() {
        return (
            <div id='chart'></div>
        )
    }
}
export default LineChart;
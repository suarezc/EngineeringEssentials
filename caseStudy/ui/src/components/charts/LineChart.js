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
            xAxis: {
                title: {
                    text: 'Day'
                }
            },
            yAxis: {
                title: {
                    text: 'End of Day Price'
                }
            },
            series: [{
                name: 'Prices',
                data: this.props.data
            }]
        });

    }

    componentWillReceiveProps(props) {
        console.log("New data received to redraw chart.");
        
        /**
         * TODO
         * Parse the data received from props, a Javascript object, to map to a Javascript array
         * required by the type of line chart chosen and set it in the series. Use Date.UTC(..)
         * to create the x-axis.
         */

        var dates = [];
        for (i = 0; i < Object.keys(props.data).length; i++) {
            dates.push(Date.UTC(props.data[i].getYear(), props.data[i].getMonth(), props.data[i].getDay()));
        }

        Highcharts.chart('chart', {
            xAxis :{
                tickPositions : dates
            }
        });
        
        /**
         * TODO
         * Uncomment the line below to pass the data be displayed to the series
         * this.chart.series[0].setData(data);
         */
         this.chart.series[0].setData(props.data);
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


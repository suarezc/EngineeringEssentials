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
import './style/App.css';
import StockTicker from "./components/StockTicker.js";
import Date from './components/Date.js';

/**
 * TODO:
 * Import your components
 */


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          symbol: '',

            /**
             * TODO
             * Add state objects for the user inputs and anything else you may need to render the highchart.
             */
        };

    }

    render () {
      return (
          <div className="page-display">
              <div className="input">

                <StockTicker />             

                <div className="date-range">
                  <Date text="Start" />
                  <Date text="End" />
                </div>
              </div>


                 {/**
                   *  TODO
                   *  Create a div element that shows a highchart when the ticker, start date, end date
                   *  states ALL have values and nothing (null) otherwise. You will need to use a conditional here
                   *  to help control rendering and pass these states as props to the component. This conditional can
                   *  be maintained as a state object.
                   *  http://reactpatterns.com/#conditional-rendering
                   */}

          </div>
      );
    }
}

export default App;

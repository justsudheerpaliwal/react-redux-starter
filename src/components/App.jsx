import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import SamrtComponent from 'SmartComponent';
// create a redux store 
const store = createStore(reducers);

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="container">
          <h1>React and Redux Boilerplate !</h1>
          {/* import your components/containers here */}
        </div>
      </Provider>
    );
  }
}
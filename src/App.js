import React, { Component } from 'react';
import { connect } from 'react-redux'; /* adds redux connect() function */
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// lines 26-30 are using the connect() function
// connect listens to state changes and only rerenders when there's been one
// it then provides the relevant changes to the component (i.e. what is specified in mapStateToProps)
const mapStateToProps = (state) => {
  return { items: state.items };
};
 
export default connect(mapStateToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sampleAction } from './actions';

const SmartComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Smart Component</h1>
      <p className="text-warning">
        Edit the <code className="text-danger">src/containers/index.jsx</code> to change the content
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    sample: state.sample,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sampleAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent);

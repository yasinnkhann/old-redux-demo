import React from 'react';
import { connect } from 'react-redux';

const Display = ({ counter }) => <p>The current counter is {counter}!</p>;

const mapStateToProps = state => ({
	counter: state.counter,
});

export default connect(mapStateToProps)(Display);

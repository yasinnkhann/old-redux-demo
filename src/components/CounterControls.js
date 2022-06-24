import React from 'react';
import { connect } from 'react-redux';
import {
	incrementCount,
	decrementCount,
	resetCount,
} from '../actions/counterActions';

const Controls = ({ incrementCount, decrementCount, resetCount }) => (
	<div>
		<button onClick={() => incrementCount()}>+</button>
		<button onClick={() => decrementCount()}>-</button>
		<button onClick={() => resetCount()}>Reset</button>
	</div>
);

const mapDispatchToProps = dispatch => ({
	incrementCount: () => dispatch(incrementCount()),
	decrementCount: () => dispatch(decrementCount()),
	resetCount: () => dispatch(resetCount()),
});

export default connect(null, mapDispatchToProps)(Controls);

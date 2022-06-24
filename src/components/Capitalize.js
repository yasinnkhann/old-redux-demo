import React, { useState } from 'react';
import { connect } from 'react-redux';
import { capitalizeLetters } from '../actions/capitalizeActions';

const Capitalize = ({ capitalize, dispatchCapitalizeLetters }) => {
	const [query, setQuery] = useState('');
	return (
		<div>
			<input
				type='text'
				placeholder='Capitalize Me...'
				onChange={e => setQuery(e.target.value)}
			/>
			<button onClick={() => dispatchCapitalizeLetters(query)}>Enter</button>
			<p>{capitalize}</p>
		</div>
	);
};

const mapStateToProps = state => ({
	capitalize: state.capitalize.value,
});

const mapDispatchToProps = dispatch => ({
	dispatchCapitalizeLetters: query => dispatch(capitalizeLetters(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Capitalize);

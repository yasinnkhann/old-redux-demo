import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';
import Capitalize from './components/Capitalize';

const App = () => (
	<div>
		<h1>React Redux Demo</h1>
		<CounterDisplay />
		<CounterControls />
		<Capitalize />
	</div>
);

export default App;

import React, { useState } from 'react';
import './App.css'

function App() {
	const [inputValue, setInputValue] = useState('');

	const handleClearInput = () => {
		setInputValue('');
	};

	return (
		<div>
			<input className='input'
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Введите текст"
			/>
			<button onClick={handleClearInput}>Очистить поле</button>
		</div>
	);
}

export default App;


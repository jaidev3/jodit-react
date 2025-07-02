import './app.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Form from './components/Form';

// For React < 18
// import ReactDOM from 'react-dom';
// ReactDOM.render(<Form />, document.getElementById('editor'));

const container = document.getElementById('editor')!;
const root = createRoot(container);
root.render(
	<StrictMode>
		<Form />
	</StrictMode>
);

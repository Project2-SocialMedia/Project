import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './reducers/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Navbar />
			<Main />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

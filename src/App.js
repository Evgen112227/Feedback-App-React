import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
	return (
		<FeedbackProvider>
			<Header text="Hello World!" />
			<div className="container">
				<FeedbackForm />
				<FeedbackStats />
				<FeedbackList />
			</div>
		</FeedbackProvider>
	);
};

export default App;

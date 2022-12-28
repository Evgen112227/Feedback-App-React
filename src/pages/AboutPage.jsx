import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>React App to leave feedback</p>
			</div>

			<p>
				<Link to="/">Back To Home</Link>
			</p>
		</Card>
	);
};

export default AboutPage;

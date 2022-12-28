import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || !feedback.length) {
		return <p>No feedback yet</p>;
	} else {
		return (
			<div className="feedback-list">
				{feedback.map((item) => (
					<FeedbackItem item={item} rating={item.rating} text={item.text} id={item.id} key={item.id} />
				))}
			</div>
		);
	}
};

export default FeedbackList;

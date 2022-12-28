import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ rating, text, id, item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card>
			<div className="num-display">{rating}</div>
			<button onClick={() => deleteFeedback(id)} className="close">
				<MdDelete color="purple" />
			</button>
			<button className="edit">
				<MdEdit onClick={() => editFeedback(item)} color="purple" />
			</button>
			<div className="text -display">{text}</div>
		</Card>
	);
};

export default FeedbackItem;

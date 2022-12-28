import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AboutIconLink = () => {
	return (
		<div>
			<div className="about-link">
				<Link to="/about">
					<AiOutlineQuestionCircle size={30} />
				</Link>
			</div>
		</div>
	);
};

export default AboutIconLink;

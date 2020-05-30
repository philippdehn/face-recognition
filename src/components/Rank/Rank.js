import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
	return(
		<div className="Rank">
			<div className="rankText">
				{`${name}, your count is ...`}
			</div>
			<div className="rankNumber">
				{entries}
			</div>
		</div>
	);
}

export default Rank;
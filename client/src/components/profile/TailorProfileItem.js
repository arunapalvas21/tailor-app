import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { deleteExperience } from '../../actions/profileActions';

class TailorProfileItem extends Component {
	// onDeleteClick(id) {
	// 	this.props.deleteExperience(id);
	// }

	render() {
		const profiles = this.props.tailors.map( profile => (
			<tr key={profile._id}>
				<td>{profile.name}</td>
				<td>{profile.email}</td>
				<td>{profile.date}</td>
				<td>
				<FontAwesomeIcon icon={faTrash}
					// onClick={this.onDeleteClick.bind(this, exp._id)}
				/>
				{/* <button
					// onClick={this.onDeleteClick.bind(this, exp._id)}
					className="btn btn-danger"
				>
					Delete
				</button> */}
				</td>
			</tr>
		));

		return (
		<div>
			<h4 className="mb-4">Tailors Profile</h4>
			<table className="table">
			<thead>
				<tr>
				<th>Name</th>
				<th>Email Id</th>
				<th>Working From</th>
				<th />
				</tr>
				{profiles}
			</thead>
			</table>
		</div>
		);
	}
}

// TailorProfileItem.propTypes = {
//   deleteExperience: PropTypes.func.isRequired
// };

// export default connect(null, { deleteExperience })(TailorProfileItem);
export default TailorProfileItem
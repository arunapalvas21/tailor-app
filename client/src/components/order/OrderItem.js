import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getOrders } from '../../actions/orderActions';

class OrderItem extends Component {
	componentDidMount() {
		this.props.getOrders();
	}

	render() {
		const { orders, loading } = this.props.order;
		let orderItems;

		if (orders === null || loading) {
				orderItems = <Spinner />;
		} else {
			if (orders.length > 0) {
				orderItems = (
					<OrderItem orders={orders} />
				);
			} else {
				orderItems = <h4>No orders found...</h4>;
			}
		}

		return (
		<div className="order-item">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{orderItems}
					</div>
				</div>
			</div>
		</div>
		);
	}
}

OrderItem.propTypes = {
	getOrders: PropTypes.func.isRequired,
	order: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	order: state.order
});

export default connect(mapStateToProps, { getOrders })(OrderItem);
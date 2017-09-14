import React, { Component  } from 'react';
// import {  } from '../store';
// import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl, Container} from 'react-bootstrap';
import {connect} from 'react-redux'
import { fetchOrdersForUser } from '../store'


 class MyAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showThis: ''    
        }
        
        
    }
    componentDidMount() {
        this.props.fetchOrders(3)
    }
    render() {
        console.log(this.props)

        const style = {
            backgroundColor: '#4EB1BA'
        }
        const orders = this.props.orders
        return (
            <div style={style}>

            <Grid >
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                           <h1>Your cart</h1>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                            <h1></h1>
                    </Col>
                </Row>
                
            </Grid>
            <br/>
            </div>
        )
    }
}

const mapState = state => ({
    orders: state.order,
    cart: state.cart
})

const mapDispatch = dispatch => ({
    fetchOrders(userId) {
        dispatch(fetchOrdersForUser(userId))
    }
})

const MyAccountContainer = connect(mapState, mapDispatch)(MyAccount)

export default MyAccountContainer



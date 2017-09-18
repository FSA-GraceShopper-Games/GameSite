import React, { Component  } from 'react';
// import {  } from '../store';
// import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl, Container} from 'react-bootstrap';
import {connect} from 'react-redux'
import { fetchOrdersForUser } from '../store'

var totalPrice = 0

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }        
    }


    componentDidMount() {
    }

    renderCartItem(product) {
        return (
            <div  key={product.name}>
            <Row>
                <Col xs={12} md={4}>
                    <img src={product.image}/>         
                </Col>
                <Col xs={12} md={4}>
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>Count: 1</h4>
                    <h4>Price Times Count: {product.price}</h4>
                </Col>
                <Col xs={12} md={4}>
                    <p>
                    <button style={{display: "inLine"}}>
                        Remove All
                    </button>
                    </p>
                    <p>
                    <button style={{display: "inline"}}>
                        Add One
                    </button>
                    </p>
                    <p>
                    <button style={{display: "inline"}}>
                        Remove One
                    </button>
                    </p>
                </Col>
            </Row>
            <br/>
            </div>
        )
    }
    render() {
        console.log(this.props)

        const style = {
            backgroundColor: '#B94629'
        }
        const orders = this.props.orders
        return (
            <div>
                <h2>Cart: </h2>
            <Grid style={style}>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                     
                    </Col>
                </Row>
                {
                   littleCart && littleCart.map((item) => {
                        return this.renderCartItem(item)
                    })
                }
                <Row>
                    <Col xs={8} md={8}>
                    <h2>TOTAL PRICE = {totalPrice.toFixed(2)}</h2>
                    </Col>
                    <Col xs={4} md={4}>
                    <button> CHECKOUT!!! </button>
                    </Col>
                </Row>
            </Grid>
            <br/>

            </div>
        )
    }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
})

const CartContainer = connect(mapState, mapDispatch)(Cart)

export default CartContainer



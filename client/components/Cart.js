import React, { Component  } from 'react';
// import {  } from '../store';
// import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'

import {Grid, Row, Col, FormControl, Container, FormGroup, ControlLabel} from 'react-bootstrap';
import {connect} from 'react-redux'
import { fetchOrdersForUser, removeFromCart, emptyCart, addOrder } from '../store'


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


var totalPrice = 0

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)    
        this.handleCheckout = this.handleCheckout.bind(this)
        this.handleAddOne = this.handleAddOne.bind(this)    
    }

    componentDidMount() {

    }

    handleClick(e) {
        console.log('etarget', e.target.value)
        this.props.remove(e.target.value)
    }
    handleCheckout(e) {
        e.preventDefault()
        var totalPrice = 0;
        for(var i = 0; i < this.props.cart.length; i++) {
            var item = this.props.cart[i];
            totalPrice +=  +item.price
        }
        var products = []
        for (var i = 0; i < this.props.cart.length; i++) {
            var item = this.props.cart[i];
            products.push(item.id)
        }

        var address= e.target.address.value
        var email = e.target.email.value
        console.log('userbro', this.props.user)
        this.props.createOrder(products, address, totalPrice, email, this.props.user.id)
        this.props.emptyTheCart()
    }

    handleAddOne() {


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
                    <button value={product.id} onClick={this.handleClick} style={{display: "inLine"}}>
                        Remove All
                    </button>
                    </p>
                    <p>
                    <button onClick={this.handleAddOne} style={{display: "inline"}}>
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
        var totalPrice = 0;
        for(var i = 0; i < this.props.cart.length; i++) {
            var item = this.props.cart[i];
            totalPrice +=  +item.price
        }
        console.log('totalprice', totalPrice)
        
        console.log('render', this.props)
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

                    this.props.cart.map((item) => {
                        return this.renderCartItem(item)
                    })
                }
                <Row>
                    <Col xs={8} md={8}>
                    <h2>TOTAL PRICE = {totalPrice.toFixed(2)}</h2>
                    </Col>
                    <Col xs={4} md={4}>
                    </Col>
                </Row>
                <Row>
                    <form onSubmit={this.handleCheckout}> 
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        name="address"
                        label="Shipping Address?"
                        placeholder="Enter Address"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        name="email"
                        label="Email Address?"
                        placeholder="Enter Email"
                    />
                    <button type="submit" > CHECKOUT!!! </button>

                    </form>
                  
                </Row>

            </Grid>
            <br/>

            </div>
        )
    }
}

const mapState = state => ({
    user: state.user
})

const mapDispatch = dispatch => ({
    remove(id) {
        dispatch(removeFromCart(id))
    },
    createOrder(products, address, totalPrice, email, userId) {
        dispatch(addOrder(products, address, totalPrice, email, userId))
    },
    emptyTheCart() {
        dispatch(emptyCart())
    }


})

const CartContainer = connect(mapState, mapDispatch)(Cart)

export default CartContainer



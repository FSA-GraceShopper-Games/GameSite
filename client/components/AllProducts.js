import React, { Component  } from 'react';
// import {  } from '../store';
import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import {Col} from 'react-bootstrap';

import SingleProd from './SingleProduct'

import { fetchProducts, fetchAllReviews } from '../store'

class AllProducts extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProducts();
        this.props.fetchAllReviews();
    }

    render() {
        const style = {
            backgroundColor: '#4EB1BA'
        }
        return (

                <Col xs={12} md={12} style={style}>
                <h1>
                    Search Results:
                </h1>
                <div className="d-flex justify-content-end" style={{padding: '0.75rem'}}>
                    <Link className="btn btn-info p-2" to={'/product/add'} role="button">Add A Product</Link>
                </div>
                {

                    this.props.products.map((product, ind) => {
                        return (
                            <SingleProd key={ind} price={product.price} product={product}/>
                        )
                    })
                }
                </Col>
        )
    }
}

const mapState = state => ({
    entirestate: state,
    products: state.filterProducts.length === 0 ? state.allProducts : state.filterProducts  //state.filterProducts
})



const mapDispatch = dispatch => ({
    fetchAllProducts() {
        dispatch(fetchProducts())
    },
    fetchAllReviews() {
        dispatch(fetchAllReviews())
    }
})

const AllProductsContainer = connect(mapState, mapDispatch)(AllProducts)

export default AllProductsContainer



import React, { Component  } from 'react';
// import {  } from '../store';
import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Col} from 'react-bootstrap';
import SingleProd from './SingleProduct'
import { fetchProducts, fetchAllReviews } from '../store'

class AllProducts extends Component {

    constructor(props) {
        super(props)

        // this.fetchProductsOuter = this.fetchProductsOuter.bind(this)

    }   

    componentDidMount() {
        this.props.fetchAllProducts();
        this.props.fetchAllReviews();
    }

    render() {
        console.log(this.props)
        const style = {
            backgroundColor: '#4EB1BA'
        }
        return (

                <Col xs={12} md={12} style={style}>
                <h1>
                    Search Results:
                </h1>
                {

                    this.props.products.map((product, ind) => {
                        return (
                            <SingleProd key={ind} product={product}/>
                        )
                    })
                }
                </Col>
        )
    }
}

const mapState = state => ({
    products: state.allproducts
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



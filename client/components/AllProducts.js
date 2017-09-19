import React, { Component  } from 'react';
// import {  } from '../store';
import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl, Container} from 'react-bootstrap';
import SingleProd from './SingleProduct'
import { fetchProducts } from '../store'

class AllProducts extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProducts()
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
})

const AllProductsContainer = connect(mapState, mapDispatch)(AllProducts)

export default AllProductsContainer



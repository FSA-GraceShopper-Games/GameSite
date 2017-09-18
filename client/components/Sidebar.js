import React, {Component} from 'react';
// import { Link } from 'react-router';
import {connect} from 'react-redux';
import {gotProductsFromServer, fetchProducts, filterByProducts} from '../store'
import store from '../store'


class Sidebar extends Component {

    constructor(props){
        super(props)

        this.filterByPrice = this.filterByPrice.bind(this)
    }


    filterByPrice(obj, e){
        // store.dispatch(fetchProducts())
        // if(!this.props.products.length) store.dispatch(fetchProducts())
        let min = obj.min
        let max = obj.max
        let products = this.props.products
        let filterProducts = products.filter(product => product.price >= min && product.price < max)
        store.dispatch(filterByProducts(filterProducts))
        // store.dispatch(gotProductsFromServer(filterProducts))
        console.log('my products ',products)
        console.log('my filter productsa',this.props.filterProducts)
        // console.log('does this work??? ', filterByProducts())
        // console.log('filter ', filterProducts)
        // console.log('products ', this.props.products)


    }

    render(){
            return (
            <div style={{marginTop: '60px'}} id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    sort by price
                    <ul>
                        <li onClick={this.filterByPrice.bind(this, {min:0, max: 25})}><a href="#">under $25</a></li>
                        <li onClick={this.filterByPrice.bind(this, {min:25, max: 50})}><a href="#">$25 to $50</a></li>
                        <li onClick={this.filterByPrice.bind(this, {min:50, max: 1000})}><a href="#">$50 + </a></li>
                    </ul>
                </li>
                <li>
                    sort by reviews
                    <ul>

                        <li style={{color: 'yellow'}}><a href="#">{"★★★★☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"★★★☆☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"★★☆☆☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"★☆☆☆☆"} & Up</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        products: state.allProducts,
        filterProducts: state.filterProducts
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         filterByPrice(obj, e){
//             let min = obj.min
//             let max = obj.max
//             let products = ownProps.products
//             let filterProducts = products.filter(product => product.price >= min && product.price < max)
//             // const filterProducts = this.props.products.filter(product => product.price > e.target.value.min && product.price < e.target.value.max)
//             // console.log('yoooooo ', filterProducts)
//             dispatch(gotProductsFromServer(filterProducts))
//         }
//     }
// }

const SidebarContainer = connect(mapStateToProps)(Sidebar)
export default SidebarContainer



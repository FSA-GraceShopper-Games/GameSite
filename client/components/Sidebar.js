import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterByProducts} from '../store'


class Sidebar extends Component {


    filterByPrice(obj){
        let min = obj.min
        let max = obj.max
        let products = this.props.products
        let filterProducts = products.filter(product => product.price >= min && product.price < max)
        this.props.filterProductByPrice(filterProducts)
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

                        <li><a href="#">{"★★★★☆"} & Up</a></li>
                        <li><a href="#">{"★★★☆☆"} & Up</a></li>
                        <li><a href="#">{"★★☆☆☆"} & Up</a></li>
                        <li><a href="#">{"★☆☆☆☆"} & Up</a></li>
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

const mapDispatchToProps = dispatch => {
    return {
        filterProductByPrice(products){
            dispatch(filterByProducts(products));
        }
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default SidebarContainer



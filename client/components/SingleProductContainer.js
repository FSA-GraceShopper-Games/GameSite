import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {WholePageSingle} from '../components';
import store, {getCart, addProductToCart} from '../store'


class SingleProductContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isAdmin: false,
      carDirection: null,
      carIndex: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCarSelect = this.handleCarSelect.bind(this);
  }

  handleCarSelect (selectedIndex, evt){
    this.setState({
      carIndex: selectedIndex,
      carDirection: evt.direction
    })
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log(this.props.products)
    const productId = this.props.match.params.id
    this.props.addProductToCart(productId);
  }

  render () {
    console.log('im here', this.props)
    const reviews = this.props.reviews.filter(x => {return +x.productId === +this.props.match.params.id})
    const product = this.props.products.find(x => {return +x.id === +this.props.match.params.id})
      return(
      <WholePageSingle direction={this.state.carDirection}
                    index={this.state.carIndex}
                    handleCarSelect={this.handleCarSelect}
                    handleSubmit={this.handleSubmit}
                    product={product}
                    reviews={reviews}
                    />
      )  
  }
}

const mapStateToProps = state => ({
  products: state.allProducts,
  reviews: state.reviews
})
  
const mapDispatchToProps = dispatch => ({
  addProductToCart: (product) => dispatch(addProductToCart(product))
})
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer))

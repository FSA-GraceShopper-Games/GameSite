import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {WholePageSingle} from '../components';
import store, {getCart, addProductToCart} from '../store'

let product =  {
        id: 1,
        name: 'Destiny',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51cNjbb5sbL._AC_US218_.jpg',
        description: 'Picanha tri-tip meatloaf, short loin beef salami pork t-bone filet mignon cow flank porchetta cupim. Chuck ball tip biltong capicola pork, venison bacon bresaola shank jowl chicken fatback turducken. Sirloin landjaeger ground round salami cupim pork belly jerky beef ham hock burgdoggen jowl ball tip boudin. Frankfurter ham hock tri-tip venison turkey, pig t-bone spare ribs bresaola pork chop beef ribs prosciutto kielbasa salami fatback. Pastrami filet mignon bacon, tongue kielbasa meatball fatback tail biltong jowl ribeye pork loin corned beef pancetta.',
        price: 59.99,
        avgReview: 4
    }

class SingleProductContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isAdmin: false,
      carDirection: null,
      carIndex: 0
    };
    this.setState({SingleProduct: this.props.products.find(x => {return +x.id === +this.props.match.params.id})})
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
    const product = this.props.products.find(x => {return +x.id === +this.props.match.params.id})
    const quantity = evt.target.value
    this.props.addProductToCart(product, quantity);
  }

  render () {
    console.log('im here', this.state)
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
  products: state.allproducts,
  reviews: state.reviews
})
  
const mapDispatchToProps = dispatch => ({
  addProductToCart: (product) => dispatch(addProductToCart(product))
})
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer))

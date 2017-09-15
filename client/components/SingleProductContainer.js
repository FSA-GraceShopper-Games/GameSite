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

  componentDidMount(){
    axios.get(`/${props.match.params.id}`)
      .then(result => res.json(result))
      .then(product => this.setState({product}))
      .catch(console.error)
  }
  handleCarSelect (selectedIndex, evt){
    this.setState({
      carIndex: selectedIndex,
      carDirection: evt.direction
    })
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    const productId = evt.target.value;
    this.props.addProductToCart(product, quantity);
  }

  render () {
    console.log('im here')
    return (
      <WholePageSingle direction={this.state.carDirection}
                      index={this.state.carIndex}
                      handleCarSelect={this.handleCarSelect}
                      handleSumbit={this.handleSumbit}
                      product={this.state.product}

                      />
    );   
  }
}

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = dispatch => ({
  addProductToCart: (product) => dispatch(addProductToCart(product))
})
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllProducts))

/* const mapDispatchToProps = dispatch => ({
    someFunc: (someData) => dispatch(someFunc(someData))
})
const mapPropsToState = function(store){
  return{
    newState: store.students
  }
}; */
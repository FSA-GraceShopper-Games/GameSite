import React, {Component} from 'react';
import {connect} from 'react-redux'
import store from '../store.jsx'
import SingleProduct from '../components/SingleProduct';

export class SingleProductContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isAdmin: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    const productId = evt.target.value;
    this.props.addOrderToCart(quantity);
  }

  render () {

    return (
      <SingleProduct />
      
    );   
  }
}

/* const mapDispatchToProps = dispatch => ({
    someFunc: (someData) => dispatch(someFunc(someData))
})
const mapPropsToState = function(store){
  return{
    newState: store.students
  }
}; */

// export default connect(mapPropsToState, mapDispatchToProps)(AllStudentListContainer)
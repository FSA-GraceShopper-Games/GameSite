import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {WholePageSingle} from '../components';

class SingleProductContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isAdmin: false,
      carDirection: null,
      carIndex: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCarSelect (selectedIndex, evt){
    this.setState({
      carIndex: selectedIndex,
      carDirection: evt.direction
    })
  }

  handleCarSubmit (evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    const productId = evt.target.value;
    this.props.addOrderToCart(quantity);
  }

  render () {
    console.log('im here')
    return (
      <WholePageSingle direction={this.state.carDirection}
                      index={this.state.carIndex}
                      handleSelect={this.handleSelect.bind(this)}
                      />

            
      
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

export default withRouter(SingleProductContainer)
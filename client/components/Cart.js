import React, { Component  } from 'react';
// import {  } from '../store';
// import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl, Container} from 'react-bootstrap';
import {connect} from 'react-redux'
import { fetchOrdersForUser } from '../store'


const littleCart = [
    {
        name: 'Destiny',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51cNjbb5sbL._AC_US218_.jpg',
        description: 'Picanha tri-tip meatloaf, short loin beef salami pork t-bone filet mignon cow flank porchetta cupim. Chuck ball tip biltong capicola pork, venison bacon bresaola shank jowl chicken fatback turducken. Sirloin landjaeger ground round salami cupim pork belly jerky beef ham hock burgdoggen jowl ball tip boudin. Frankfurter ham hock tri-tip venison turkey, pig t-bone spare ribs bresaola pork chop beef ribs prosciutto kielbasa salami fatback. Pastrami filet mignon bacon, tongue kielbasa meatball fatback tail biltong jowl ribeye pork loin corned beef pancetta.',
        price: 59.99,
        avgReview: 4
    },
    {
        name: 'The Last Of Us',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL._SX215_.jpg',
        description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
        price: 59.99,
        avgReview: 5
    },
    {
        name: 'Call of Duty',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51S7L3r1RzL._AC_US218_.jpg',
        description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
        price: 59,
        avgReview: 5
    }

]
var totalPrice = 0

for(var i = 0; i < littleCart.length; i++) {
    var item = littleCart[i];
    totalPrice+=item.price
}
class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }        
    }


    componentDidMount() {
    }

    renderCartItem(product) {
        return (
            <div  key={product.name}>
            <Row>
                <Col xs={12} md={4}>
                    <img src={product.image}/>         
                </Col>
                <Col xs={12} md={4}>
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>Count: 1</h4>
                    <h4>Price Times Count: {product.price}</h4>
                </Col>
                <Col xs={12} md={4}>
                    <p>
                    <button style={{display: "inLine"}}>
                        Remove All
                    </button>
                    </p>
                    <p>
                    <button style={{display: "inline"}}>
                        Add One
                    </button>
                    </p>
                    <p>
                    <button style={{display: "inline"}}>
                        Remove One
                    </button>
                    </p>
                </Col>
            </Row>
            <br/>
            </div>
        )
    }
    render() {
        console.log(this.props)

        const style = {
            backgroundColor: '#B94629'
        }
        const orders = this.props.orders
        return (
            <div>
                <h2>Cart: </h2>
            <Grid style={style}>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                     
                    </Col>
                </Row>
                {
                    littleCart.map((item) => {
                        return this.renderCartItem(item)
                    })
                }
                <Row>
                    <Col xs={8} md={8}>
                    <h2>TOTAL PRICE = {totalPrice.toFixed(2)}</h2>
                    </Col>
                    <Col xs={4} md={4}>
                    <button> CHECKOUT!!! </button>
                    </Col>
                </Row>
            </Grid>
            <br/>

            </div>
        )
    }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
})

const CartContainer = connect(mapState, mapDispatch)(Cart)

export default CartContainer



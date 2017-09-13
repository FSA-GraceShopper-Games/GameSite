import React, { Component  } from 'react';
// import {  } from '../store';
import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl, Container} from 'react-bootstrap';
import SingleProd from './SingleProduct'

const products = [
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
    },
    {
        name: 'Call of Duty',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51S7L3r1RzL._AC_US218_.jpg',
        description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
        price: 49.99,
        avgReview: 4
    },
    {
        name: 'Call of Duty',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51S7L3r1RzL._AC_US218_.jpg',
        description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
        price: 79.99,
        avgReview: 1
    },
    {
        name: 'Call of Duty',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51S7L3r1RzL._AC_US218_.jpg',
        description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
        price: 59.99,
        avgReview: 4
    },
    {
        name: 'Call of Duty',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51S7L3r1RzL._AC_US218_.jpg',
        description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
        price: 49.99,
        avgReview: 5
    }
]

class AllProducts extends Component {

    constructor(props) {
        super(props)

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
                    products.map((product) => {
                        return (
                            <SingleProd product={product}/>
                        )
                    })
                }
                </Col>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const AllProductsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProducts)

export default AllProductsContainer
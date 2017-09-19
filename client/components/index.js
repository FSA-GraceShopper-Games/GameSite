/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as AllProducts} from './AllProducts'
export {Login, Signup} from './auth-form'
export {default as WholePageSingle} from './WholePageSingle'
export {default as SingleProduct} from './SingleProduct'
export {default as SingleProductContainer} from './SingleProductContainer';
export {default as MyAccount} from './MyAccount'
export {default as AddProduct} from './AddProduct'
export {default as EditProduct} from './EditProduct'
export {default as Addreviewform} from './Addreviewform'


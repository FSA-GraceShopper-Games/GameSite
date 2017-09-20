import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout, filterByProducts, fetchGenre, isDirty, fetchProducts} from '../store'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }

    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderMyAccountLogout = this.renderMyAccountLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllGenre()
    this.props.fetchProducts()
    
    // this.props.filterProducts(this.props.products)
    // console.log('here!!!!!')
    // console.log('something ', this.props.filteredStuff)
  }

  renderLoginSignup() {
    return (
      <ul className="navbar-nav navbar-inline">
        <li>
          <NavLink className="btn btn-info margin" to="/signup" activeClassName="active" role="button">Signup</NavLink>
        </li>
        <li>
          <NavLink className="btn btn-info" to="/login" activeClassName="active" role="button">Login</NavLink>
        </li>
      </ul>
    );
  }

  renderMyAccountLogout() {
    return (
      <ul className="navbar-nav navbar-inline">
        <li>
          <NavLink className="btn btn-info margin" to="/myaccount" activeClassName="active" role="button">My Account</NavLink>
        </li>
        <li>
          <button
            className="btn btn-info"
            onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    )
  }

  handleChange(evt){
    const value = evt.target.value;
    this.setState({
      inputVal: value
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    const inputValue = this.state.inputVal;
    const filteredByInput = this.props.filteredStuff.filter(product =>
      product.name.startsWith(inputValue));
    this.props.filterProducts(filteredByInput)
    this.props.isDirty()
  }

  handleSelect(obj){
    const filterBySelect = this.props.products.filter(product => 
      product.genre.name === obj)
     this.props.filterProducts(filterBySelect)
     this.props.isDirty()
  }

  render() {
    console.log('DGHFDHGFDGHFD ', this.props.filteredStuff)
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <NavLink to='/' className="navbar-brand" href="#">Ninja</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Games <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Best Sellers</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Genre
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <ul >
                  {
                    this.props.genres.map(genre => {
                      return (
                        <li 
                          
                          onClick={() => this.handleSelect(genre.name)} 
                          style={{listStyle:"none"}} 
                          key={genre.id}>
                          <NavLink to='/' className="dropdown-item" href="#">
                            {genre.name}
                          </NavLink>
                        </li>
                        )
                    })
                  }
                </ul>
              </div>
            </li>
          </ul>
          <form onSubmit={this.handleSubmit} className="form-inline mr-auto">
            <input 
              className="form-control mr-sm-2" 
              type="text" 
              placeholder="Search" 
              aria-label="Search"
              value={this.state.inputVal}
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          { this.props.user.id ? this.renderMyAccountLogout() : this.renderLoginSignup() }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({ 
  user: state.user,
  products: state.allProducts,
  filteredStuff: state.filterProducts,
  genres: state.genres
})

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout())
  },
  filterProducts: (products) =>{
    dispatch(filterByProducts(products))
  },
  fetchAllGenre: ()=>{
    dispatch(fetchGenre())
  },
  isDirty: ()=>{
    dispatch(isDirty())
  },
  fetchProducts: () => {
    dispatch(fetchProducts())
  }
})

const NavbarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

export default NavbarContainer



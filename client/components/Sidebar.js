import React, {Component} from 'react';
// import { Link } from 'react-router';
import {connect} from 'react-redux';



const games = 
[
    {
      id: 1,
      name: 'XBox',
      description: 'console',
      image: 'https://pbs.twimg.com/profile_images/873233168526065664/3P9eo0Ze.jpg',
      price: 50
    },
    {
      id: 2,
      name: 'PS4',
      description: 'console',
      image: 'http://vectorlogo4u.com/wp-content/uploads/2015/11/PS4-Logo-Vector.jpg',
      price: 20
    },
    {
      id: 3,
      name: 'NINTENDO',
      description: 'console',
      image: 'https://i.kinja-img.com/gawker-media/image/upload/s--OHmf2PQl--/c_scale,fl_progressive,q_80,w_800/18j56705j24sqjpg.jpg',
      price: 10
    }
]


export default class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = { 
            games,
        }
    }

    render(){
        return(
            <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    sort by price
                    <ul>
                        <li><a href="#">under $25</a></li>
                        <li><a href="#">$25 to $50</a></li>
                        <li><a href="#">$50 + </a></li>
                    </ul>
                </li>
                <li>
                    sort by reviews
                    <ul>
                        <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
                        <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        )
    }

}


//     render(){

//         return(
//             <div  className="container-fluid">
//                 <div className="row flex-xl-nowrap">
//                     <sidebar className="col-12 col-md-3 col-xl-2 bd-sidebar">
//                     <br/>

//                         <nav>
//                         <ul id="sidebar" className="nav sidebar-nav ">
//                             {
//                             this.state.games.map(game => {
//                                 return (
                                    
//                                     <li className="dropdown" key={game.id}>
//                                         <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
//                                             {game.name}
//                                             <span className="caret"></span>
//                                         </a> 
                                      
//                                         <ul>
//                                             <li><a href="#">Games</a></li>
//                                             <li><a href="#">Accessories</a></li>
//                                         </ul>
                                        
//                                     </li>
                                    
//                                 )
//                             })
//                         }
//                             <br/>
//                             <ul> 
//                               <h5>filter by</h5>
//                               <h6>sort by price</h6>
//                                 <li><a href="#">under $25</a></li>
//                                 <li><a href="#">$25 to $50</a></li>
//                                 <li><a href="#">$50 + </a></li>
//                               <h6>sort by reviews</h6>
//                                 <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
//                                 <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
//                                 <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
//                                 <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
//                                 <li style={{color: 'yellow'}}><a href="#">{"☆☆☆☆☆"} & Up</a></li>
                              
//                             </ul>
//                             </ul>
//                         </nav>
                    
//                     </sidebar>
//                 </div>
//             </div>
//         )
//     }
// }

const mapStateToProps = state => {
    return {
        product: state.products
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

// export default SidebarContainer;



            // onMouseLeave={()=> this.setState({showSidebar: false, showButton: true})}
            // () =>this.setState({showChildren: !this.state.showChildren})
//onClick on <li>
import React, {Component} from 'react';
// import { Link } from 'react-router';



const games = 
[
    {
      id: 1,
      name: 'XBox',
      description: 'console',
      image: 'https://pbs.twimg.com/profile_images/873233168526065664/3P9eo0Ze.jpg'
    },
    {
      id: 2,
      name: 'PS4',
      description: 'console',
      image: 'http://vectorlogo4u.com/wp-content/uploads/2015/11/PS4-Logo-Vector.jpg'
    },
    {
      id: 3,
      name: 'NINTENDO',
      description: 'console',
      image: 'https://i.kinja-img.com/gawker-media/image/upload/s--OHmf2PQl--/c_scale,fl_progressive,q_80,w_800/18j56705j24sqjpg.jpg'
    }
]


export default class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = { 
            games,
            showButton: true,
            showSidebar: false,
            listChild: false,
            activeKey: -1
        }
    }

    showChild(key, e){
        // console.log(this.state.games.filter(game => game.id === key))

        this.setState({listChild: !this.state.listChild})
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row flex-xl-nowrap">
                    <sidebar className="col-12 col-md-3 col-xl-2 bd-sidebar">
                    <br/>
                    {
                        this.state.showButton && 
                        <button className="glyphicon glyphicon-menu-hamburger" 
                                onMouseEnter={()=> this.setState({showSidebar: true, showButton: false})}> 
                        </button>
                    }
                    
                    {
                        this.state.showSidebar && 
                        <nav>
                        <ul id="sidebar" className="nav sidebar-nav "
                            onMouseLeave={()=> this.setState({showSidebar: false, showButton: true})}
                            >
                            {
                            this.state.games.map(game => {
                                return (
                                    
                                    <li className="dropdown" key={game.id} onClick={this.showChild.bind(this, game.id)}>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                                            {game.name}
                                            <span className="caret"></span>
                                        </a> 
                                        {
                                        this.state.listChild && 
                                        <ul>
                                            <li><a href="#">Games</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>
                                        }
                                    </li>
                                    
                                )
                            })
                            }
                            </ul>
                        </nav>
                    }
                    </sidebar>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         product: ['PS4', 'XBOX', 'NINTENDO SWITCH']
//     }
// }

// const SidebarContainer = connect(mapStateToProps)(Sidebar)

// export default SidebarContainer;



            // onMouseLeave={()=> this.setState({showSidebar: false, showButton: true})}
            // () =>this.setState({showChildren: !this.state.showChildren})
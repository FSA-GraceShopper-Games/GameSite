import React from 'react';
import { Link } from 'react-router';



const Sidebar = props => {
  return(
    <sidebar className="col-span">
      <div>
        <ul>
          {
              this.props.product.map((singleProduct, index) => {
                  return (
                      <li key={index}>{singleProduct}</li>
                  )
              })
          }
        </ul>
      </div>
    </sidebar>
  )
}

// const mapStateToProps = state => {
//     return {
//         product: ['PS4', 'XBOX', 'NINTENDO SWITCH']
//     }
// }

// const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer;


import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        const {totalCounters} = this.props;
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar <span className="span.badge.badge-pill.badge-secondary">{totalCounters}</span></a>
            </nav>
        );
    }
}

//Stateless Functional Components. (No render Method)
/*const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar <span className="span.badge.badge-pill.badge-secondary">{props.totalCounters}</span></a>
        </nav>
     );
}
 
export default NavBar;*/


export default NavBar;
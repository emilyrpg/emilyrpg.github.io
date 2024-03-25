import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
			<div className="header-container">
            <header id="header">
					<h1 id="logo"><Link to="/">Emily Ros</Link></h1>
					<nav id="nav">
						<ul>
							<li><Link to="about">About</Link></li>
							<li><Link to="case-studies">Work</Link></li>
							<li><Link to="login">Login</Link></li>
							<li><Link to="elements">Elements</Link></li>
							<li><Link to="#" contact="button primary">Contact</Link></li>
						</ul>
					</nav>
				</header>
			</div>
        )
    }
}

export default Header;
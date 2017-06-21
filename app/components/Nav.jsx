import React from 'react'
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to='/' activeClassName='active-link'>Home</IndexLink></li>
                        <li><Link to='/about' activeClassName='active-link'>About</Link></li>
                        <li><Link to='/yoga' activeClassName='active-link'>Yoga</Link></li>
                        <li><Link to='/testimonials' activeClassName='active-link'>Testimonials</Link></li>
                        <li><Link to='/contactme' activeClassName='active-link'>Contact Me</Link></li>
                    </ul>
                    
                </div>
                </div>
            </nav>
		)
	}
}
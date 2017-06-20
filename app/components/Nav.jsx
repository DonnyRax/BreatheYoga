import React from 'react'
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
                        <li><Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to='/yoga' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Yoga</Link></li>
                        <li><Link to='/testimonials' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Testimonials</Link></li>
                        <li><Link to='/contactme' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact Me</Link></li>
                    </ul>
                    
                </div>
                </div>
            </nav>
		)
	}
}
import React from 'react'
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {

    componentDidMount(e){
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
    }

	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to='/' activeClassName='active-link'><i className="fa fa-home"></i>Home</IndexLink></li>
                        <li><Link to='/about' activeClassName='active-link'><i className="fa fa-user"></i>About</Link></li>
                        <li><Link to='/yoga' activeClassName='active-link'><i className="fa fa-heart"></i>Yoga</Link></li>
                        {/*<li><Link to='/gallery' activeClassName='active-link'><i className="fa fa-picture-o"></i>Gallery</Link></li>*/}
                        <li><Link to='/testimonials' activeClassName='active-link'><i className="fa fa-star"></i>Testimonials</Link></li>
                        <li><Link to='/contactme' activeClassName='active-link'><i className="fa fa-envelope"></i>Contact Me</Link></li>
                    </ul>
                    
                </div>
                </div>
            </nav>
		)
	}
}
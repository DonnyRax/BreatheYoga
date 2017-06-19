import React from 'react'

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#"><i className="fa fa-female">About</i> <span class="sr-only">(current)</span></a></li>
                        <li><a href="#"><i className="fa fa-heart">Yoga</i></a></li>
                        <li><a href="#"><i className="fa fa-star">Testimonials</i></a></li>
                        <li><a href="#"><i className="fa fa-envelope">Contact Me</i></a></li>
                    </ul>      
                    </div>
                </div>
            </nav>
		)
	}
}
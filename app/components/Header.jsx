import React from 'react'
import {Link} from 'react-router'

var Header = React.createClass({
    contactMe: function(e){
        alert('To Do');
    },
	render() {
		return (
			<header id="top-header">
                <div className="row">
                    <div className="col-12">
                        <span className="pull-right">
                            <a href="#" onClick={this.contactMe}>
                                <i className="fa fa-envelope" aria-hidden="true">
                                    <span className="icon-text">Contact Me</span>
                                </i>
                            </a>                            
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img id="logo" src="./content/images/breathe-white.png" alt="breathe logo" />
                    </div>
                    <div className="col-lg-4 col-md-4"></div>
                </div>                
            </header>
		)
	}
});

module.exports = Header;
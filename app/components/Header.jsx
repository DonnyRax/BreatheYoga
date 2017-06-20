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
                    <div className="col-lg-4 col-md-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img id="logo" src="./content/images/breathe-info-white.png" alt="breathe logo" />
                    </div>
                    <div className="col-lg-4 col-md-4"></div>
                </div>                
            </header>
		)
	}
});

module.exports = Header;
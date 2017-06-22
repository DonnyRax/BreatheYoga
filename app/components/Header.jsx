import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component{
	render() {
		return (
            <div id="top-header" className="row">
                <div className="col-lg-2"></div>
                <div id="logo-container" className="col-xs-12 col-lg-8 center-content">
                    <img id="logo" src="./content/images/breathe-info-white.png" alt="breathe logo" />
                </div>
                <div className="col-lg-2"></div>
            </div>                
		)
	}
};
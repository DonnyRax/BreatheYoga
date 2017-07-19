import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component{
	render() {
		return (
            <div>
                {/*
                <div className="row">
                    <div className="col-xs-12">
                        <div className="fb-like pull-right" data-href="https://www.facebook.com/yoga.meditation.wellbeing/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
                    </div>
                </div>
                */}
                <div id="top-header" className="row">
                    <div id="logo-container" className="col-xs-12 col-md-offset-2 col-md-8 center-content">
                        <img id="logo" src="./content/images/breathe-info-white.png" alt="breathe logo" />
                    </div>
                </div>
            </div>
		)
	}
};
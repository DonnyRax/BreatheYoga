import React from 'react'
import Footer from 'Footer'

var Home = (props) =>  {
    return (
        <div>
            <div className="row">
                <div className="hidden-xs col-md-12 strapline-text center-content">
                    Create space and time to be you
                </div>
                <div className="ol-xs-12 visible-xs strapline-text text-small center-content">
                    Create space and time to be you
                </div>
            </div>
            <div className="row">
                <div id="home-image-container" className="col-xs-12 col-md-offset-2 col-md-8 center-content">
                    <img id="yoga-image" src="./content/images/yoga2.jpg" alt="yoga"/>
                </div>
            </div>
			<Footer/>
        </div>
    )
}

module.exports = Home;
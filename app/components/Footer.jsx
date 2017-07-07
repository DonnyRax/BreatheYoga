import React from 'react'

var Footer = (props) =>  {
    return (
        <div id="footer" className="row">
            <div id="footer-left" className="col-xs-4 center-content footer-block">
                Copyright &copy; 2017
            </div>
            <div id="footer-middle" className="col-xs-4 center-content footer-block">
                breathe yoga
            </div>
            <div id="footer-right" className="col-xs-4 center-content footer-block">
                <i className="fa fa-2x fa-facebook-square"></i>
                <i className="fa fa-2x fa-instagram"></i>
            </div>
        </div>
    )
}

module.exports = Footer;
import React from 'react'

var ContactMe = (props) =>  {
    return (
        <div className="row">
            <div className="col-lg-offset-3 col-lg-6" id="contact-form">
                <form>
                    <div className="group">
                        <input type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="fa fa-user-o"></i>Name</label>
                    </div>

                    <div className="group">
                        <input type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="fa fa-at"></i>Email</label>
                    </div>

                    <div className="group">
                        <input type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="fa fa-phone"></i>Contact No</label>
                    </div>

                    <div className="group">
                        <textarea></textarea>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="fa fa-comment-o"></i>Message</label>
                    </div>
                    <div className="group">
                        <center> 
                            <button type="submit" className="btn btn-default">Send <span className="glyphicon glyphicon-send"></span></button>
                        </center>
                    </div>
                </form>

            </div>
        </div>
    )
}

module.exports = ContactMe;
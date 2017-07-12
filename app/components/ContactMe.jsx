import React from 'react'

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var name = this.refs.name.value;
        //var email = this.refs.email.value;
        //var contactno = this.refs.contactno.value;
        //var message = this.refs.message.value;

        this.refs.name.value = '';
        //this.refs.email.value = '';
        //this.refs.contactno.value = '';
        //this.refs.message.value = '';

        console.log(name);
        
    }
       
    render (){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 visible-xs">
                        <div className="page-header">
                            <h3 className="page-header-title">Contact Me</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="contact-form" className="form-horizontal col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-user-o"></i></div>
                                <input type="text" ref="name" className="form-control" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-at"></i></div>
                                <input type="text" ref="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-phone"></i></div>
                                <input type="text" ref="contactno" className="form-control" id="contactno" placeholder="Contact No" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-comment-o"></i></div>
                                <textarea ref="message" className="form-control" id="message" placeholder="Message" />
                            </div>
                        </div>
                        <div className="center-content">
                            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Send <span className="glyphicon glyphicon-send"></span></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

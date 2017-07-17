import React from 'react'

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var contactno = this.refs.contactno.value;
        var message = this.refs.message.value;
        var hasErrors = false;

        if(name && name.length > 0){
            $("#nameValidation").hide();
            $("#name-group").removeClass('form-error');
            this.refs.name.value = '';
        } else {
            $("#nameValidation").show();
            $("#name-group").addClass('form-error');
            hasErrors = true;
        }
        
        if(email && email.length > 0){
            $("#emailEmptyValidation").hide();

            var test = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
            if(test.test(email)){
                this.refs.email.value = '';
                $("#emailValidation").hide();
                $("#email-group").removeClass('form-error');
            } else {
                $("#emailValidation").show();
            }
            
        } else {
            $("#emailEmptyValidation").show();
            $("#email-group").addClass('form-error');
            hasErrors = true;
        }
        
        if(contactno && contactno.length > 0){
            this.refs.contactno.value = '';
        }
        
        if(message && message.length > 0){
            $("#messageValidation").hide();
            $("#message-group").removeClass('form-error');
            this.refs.message.value = '';
        } else {
            $("#messageValidation").show();
            $("#message-group").addClass('form-error');
            hasErrors = true;
        }
        
        if(!hasErrors){
            // data in the form
            $("#contact-form").submit();
        }
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
                    <form id="contact-form" role="form" className="form-horizontal col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8" method="post" action="/api/mail.php">
                        <div className="form-group">
                            <div id="name-group" className="input-group">
                                <div className="input-group-addon"><i className="fa fa-user-o"></i></div>
                                <input type="text" ref="name" className="form-control" id="name" name="name" placeholder="Name" />
                            </div>
                            <div id="nameValidation" className="pull-right">
                                <label className="label label-danger">Name is required</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div id="email-group" className="input-group">
                                <div className="input-group-addon"><i className="fa fa-at"></i></div>
                                <input type="text" ref="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                            <div id="emailEmptyValidation" className="pull-right">
                                <label className="label label-danger">Email is required</label>
                            </div>
                            <div id="emailValidation" className="pull-right">
                                <label className="label label-danger">Please enter a valid email address</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div id="contactno-group" className="input-group">
                                <div className="input-group-addon"><i className="fa fa-phone"></i></div>
                                <input type="text" ref="contactno" className="form-control" id="contactno" name="contactno" placeholder="Contact No" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div id="message-group" className="input-group">
                                <div className="input-group-addon"><i className="fa fa-comment-o"></i></div>
                                <textarea ref="message" className="form-control" id="message" name="message" placeholder="Message" />
                            </div>
                            <div id="messageValidation" className="pull-right">
                                <label className="label label-danger">Please enter a valid message</label>
                            </div>
                        </div>
                        <div className="center-content">
                            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Send <span className="glyphicon glyphicon-send"></span></button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

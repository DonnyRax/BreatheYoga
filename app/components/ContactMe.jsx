import React from 'react'

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(e) {
        // Variable to hold request
        var request;
        var _this = this;

        // Bind to the submit event of our form
        $("#contact-form").submit(function(event){

            // Prevent default posting of form - put here to work in case of errors
            event.preventDefault();

            // Abort any pending request
            if (request) {
                request.abort();
            }
            // setup some local variables
            var $form = $(this);

            // Let's select and cache all the fields
            var $inputs = $form.find("input, button, textarea");

            // Serialize the data in the form
            var serializedData = $form.serialize();

            // Let's disable the inputs for the duration of the Ajax request.
            // Note: we disable elements AFTER the form data has been serialized.
            // Disabled form elements will not be serialized.
            $inputs.prop("disabled", true);

            // Fire off the request to /form.php
            request = $.ajax({
                url: "/api/mail.php",
                type: "post",
                data: serializedData
            });

            // Callback handler that will be called on success
            request.done(function (response, textStatus, jqXHR){
                _this.refs.name.value = '';
                _this.refs.email.value = '';
                _this.refs.contactno.value = '';
                _this.refs.message.value = '';
            });

            // Callback handler that will be called on failure
            request.fail(function (jqXHR, textStatus, errorThrown){
                // Log the error to the console
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });

            // Callback handler that will be called regardless
            // if the request failed or succeeded
            request.always(function () {
                // Reenable the inputs
                $inputs.prop("disabled", false);
            });

        });

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
        } else {
            $("#nameValidation").show();
            $("#name-group").addClass('form-error');
            hasErrors = true;
        }
        
        if(email && email.length > 0){
            $("#emailEmptyValidation").hide();

            var test = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
            if(test.test(email)){
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
        
        if(message && message.length > 0){
            $("#messageValidation").hide();
            $("#message-group").removeClass('form-error');
        } else {
            $("#messageValidation").show();
            $("#message-group").addClass('form-error');
            hasErrors = true;
        }
        
        if(!hasErrors){
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
                    <form id="contact-form" className="form-horizontal col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
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

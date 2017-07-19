import React from 'react'
import Footer from 'Footer'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(e){
        FB.XFBML.parse();
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="hidden-xs col-md-12 strapline-text center-content">
                        Create space and time to be you
                    </div>
                    <div className="col-xs-12 visible-xs strapline-text text-small center-content">
                        Create space and time to be you
                    </div>
                </div>
                <div className="row">
                    <div id="home-image-container" className="col-xs-12 col-md-8 center-content">
                        <img id="yoga-image" className="img-responsive" src="./content/images/yoga2.jpg" alt="yoga"/>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="panel panel-brand">
                            <div className="panel-heading">
                                <h3 className="panel-title">Upcoming Events</h3>
                            </div>
                            <div className="panel-body">
                                Outdoor yoga classes in Cassiobury Park over the summer, weather dependent. It will be 
                                £5 a class and you will need to bring your own yoga mat. Exact location, days and times will 
                                be announced soon right here!
                            </div>
                        </div>
                        <div className="panel panel-brand">
                            <div className="panel-body">
                                <div className="fb-page" data-href="https://www.facebook.com/yoga.meditation.wellbeing/" data-tabs="timeline, events" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/yoga.meditation.wellbeing/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/yoga.meditation.wellbeing/">breathe</a></blockquote></div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

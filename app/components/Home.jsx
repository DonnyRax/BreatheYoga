import React from 'react'


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
                    <div id="home-image-container" className="col-xs-12 col-md-8">
                        <img id="yoga-image" className="img-responsive" src="./content/images/yoga2.jpg" alt="yoga"/>

                        <div id="home-page-intro">
                            <h2><span className="brand-text">Life today can be stressful.</span></h2>

                            <p>Responsibilities, worries, pressures and fears can build up inside us, and, unless we can release them in some way, can cause a variety of health problems, both physical and mental.</p>

                            <p>'<span className="brand-text">breathe</span>' offers yoga and meditation classes designed to help you release these tensions, creating better health and wellbeing:</p>
                            <ul>
                                <li>Personalised programs for individuals</li>
                                <li>Beginner and intermediate classes for small groups</li>
                                <li>Corporate packages to improve staff wellness.</li>
                            </ul>
                            <p>Create space in your mind to find peace, happiness, awareness and perspective.</p>

                            <p><span className="brand-text slogan-text">Create space and time to be you.</span></p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="panel panel-brand">
                            <div className="panel-heading">
                                <h3 className="panel-title">Upcoming Events</h3>
                            </div>
                            <div className="panel-body">
                                First 'breathe in the park' session will be Wednesday 2nd August at 6pm. Meet by the iconic 
                                cedar tree with your yoga mat. All ages welcome.
                            </div>
                        </div>
                        <div className="panel panel-brand">
                            <div className="panel-body">
                                <div className="fb-page" data-href="https://www.facebook.com/yoga.meditation.wellbeing/" data-tabs="timeline, events" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/yoga.meditation.wellbeing/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/yoga.meditation.wellbeing/">breathe</a></blockquote></div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

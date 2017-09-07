import React from 'react'


export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(e){
        this.forceUpdate();
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
                            <div className="panel-body">
                            <img className="img-responsive" src="./content/images/breathe-together.png" alt="breathe-together" />
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-brand">
                                <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Upcoming Events
                                    </a>
                                </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        Check back regulary for updates!
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-brand">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                <h3 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Past Events
                                    </a>
                                </h3>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        '<span className="brand-text slogan-text">breathe</span> in the park' session Thursday 4<sup>th</sup> August at 8pm. Meet by the iconic 
                                        cedar tree with your yoga mat. All ages welcome.
                                        <hr/>
                                        First '<span className="brand-text slogan-text">breathe</span> in the park' session will be Wednesday 2<sup>nd</sup> August at 6pm. Meet by the iconic 
                                        cedar tree with your yoga mat. All ages welcome.        
                                    </div>
                                </div>
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

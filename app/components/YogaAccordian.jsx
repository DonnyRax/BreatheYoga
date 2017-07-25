import React from 'react'

var Yoga = (props) =>  {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 visible-xs">
                    <div className="page-header">
                        <h3 className="page-header-title">Yoga</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-brand">
                            <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                breathe 1-2-1
                                </a>
                            </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                    <p><i className="fa fa-heart-o"></i><b>Yoga and Meditation for Health and Wellbeing</b></p>
                                    <p>
                                        This six week individualised programme consists of an initial consultation to discuss your aims and 
                                        objectives of what you would like to achieve through yoga and meditation.  Yoga can help with a variety 
                                        of physical, mental and emotional challenges, for example stress, depression, back pain, inflexibility, 
                                        or arthritis.
                                    </p>
                                    <p>
                                        From this consultation, I will develop a 6 week personalised programme which will target the areas you 
                                        wish to improve. This programme will consist of a weekly 1.5 hour session plus exercises for you to 
                                        practice daily at home. 
                                    </p>
                                    <p>Package includes:</p>
                                    <ul className="package-list">
                                        <li>Nutrition guide</li>
                                        <li>24/7 support through telephone and email</li>
                                        <li>Yoga mat</li>
                                        <li>Learning support materials</li>
                                        <li>Relaxation audio</li>
                                        <li>Guided meditation audio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-brand">
                            <div className="panel-heading" role="tab" id="headingTwo">
                            <h3 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                breathe together
                                </a>
                            </h3>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    <p><i className="fa fa-heart-o"></i><b>Beginners Course: 2x per week for 6 weeks</b></p>
                                    <p>This six week course will introduce a variety of postures and their benefits, 
                                    a variety of breathing techniques and their benefits and guide you in relaxation 
                                    and meditation techniques.</p>
                                    <p>Package includes:</p>
                                    <ul className="package-list">
                                        <li>12 x 1 hour 15 mins yoga and meditation classes</li>
                                        <li>Yoga mat</li>
                                        <li>Nutrition guide</li>
                                        <li>24/7 support through ‘breathe together intermediate’ whatsapp group</li>
                                        <li>Learning support materials</li>
                                        <li>Relaxation audio</li>
                                        <li>Guided meditation audio</li>
                                    </ul>
                                    <p><i className="fa fa-heart-o"></i><b>Intermediate Class: 2x per week paid monthly</b></p>
                                    <p>Package includes:</p>
                                    <ul className="package-list">
                                        <li>2 x 1 hour 15 mins yoga and meditation classes per week</li>
                                        <li>Nutrition guide</li>
                                        <li>24/7 support through ‘breathe together intermediate’ whatsapp group</li>
                                        <li>Learning support materials</li>
                                        <li>Relaxation audio</li>
                                        <li>Guided meditation audio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-brand">
                            <div className="panel-heading" role="tab" id="headingThree">
                            <h4 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                breathe wellbeing
                                </a>
                            </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                    <p><i className="fa fa-heart-o"></i><b>Corporate classes for staff wellbeing</b></p>
                                    <p>Package includes:</p>
                                    <ul className="package-list">
                                        <li>4 x 1 hour 15 mins yoga and meditation classes</li>
                                        <li>Nutrition guide for all staff members</li>
                                        <li>Desk Yoga guide</li>
                                        <li>24/7 support through ‘breathe wellbeing’ Facebook group</li>
                                        <li>Relaxation audio</li>
                                        <li>Guided meditation audio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-brand">
                            <div className="panel-heading" role="tab" id="headingFour">
                            <h4 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                breathe retreats
                                </a>
                            </h4>
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div className="panel-body">
                                    {/*<p><i className="fa fa-heart-o"></i><b>Health and wellbeing retreats: yoga, meditation, HIIT training, nutrition advice, personalised programmes</b></p>*/}
                                    <p><i className="fa fa-heart-o"></i><b>Coming soon</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Yoga;
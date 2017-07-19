import React from 'react'

var Testimonials = (props) =>  {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 visible-xs">
                    <div className="page-header">
                        <h3 className="page-header-title">Testimonials</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1 testimonial-container">
                    <p className="testimonial testimonial-date">
                        <i className="fa fa-star"></i>July 19<sup>th</sup> 2017<i className="fa fa-star"></i>
                    </p>
                    <p className="testimonial testimonial-content">
                    "I came to Lizzie as a first timer to Yoga. I'd been wanting to give it a go for years as it's been said 
                    to reduce injuries and prolong a sporting career (mine is hanging by a thread due to constant injury). 
                    Lizzie made me feel very comfortable and was great at tailoring the sessions to my ability, working 
                    around my wrist injury following an op.
                    </p>                
                    <p className="testimonial testimonial-content">
                    We were only a small class but came with a range of abilities. Lizzie has a very calming voice which lends itself to the relaxation and meditation.
                    </p>
                    <p className="testimonial testimonial-content">
                    My flexibility has come on significantly and joints feeling stronger already after 6 weeks."
                    </p>
                    <p className="testimonial tesimonial-signature pull-right">Tom Hill</p>
                </div>
                <div className="col-xs-10 col-xs-offset-1 testimonial-container">
                    <p className="testimonial testimonial-date">
                        <i className="fa fa-star"></i>July 2<sup>nd</sup> 2017<i className="fa fa-star"></i>
                    </p>
                    <p className="testimonial testimonial-content">
                    "I was new to yoga and 5 months pregnant when I started classes with Lizzie. 
                    I found the workouts challenging yet tranquil. Exercises were adapted to suit my 
                    varying stage of pregnancy each week and Lizzie always offered alternative postures 
                    to suit my body and capabilities. Her voice, tone and delivery not only makes you 
                    feel immediately comfortable and confident in the class but each week I would leave 
                    feeling relaxed and de-stressed which was a massive benefit to me working late into 
                    my pregnancy. The breathing and meditation techniques were also an enormous help during labour.
                    </p>                
                    <p className="testimonial testimonial-content">
                    I would recommend without hesitation to anyone, whether they are a complete beginner or an advance yogi."
                    </p>
                    <p className="testimonial tesimonial-signature pull-right">Annie</p>
                </div>
            </div>
        </div>
    )
}

module.exports = Testimonials;
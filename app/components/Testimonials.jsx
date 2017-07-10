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
                <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 testimonial-container">
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
                    <p className="testimonial tesimonial-signature pull-right">Annie, Watford</p>
                </div>
            </div>
        </div>
    )
}

module.exports = Testimonials;
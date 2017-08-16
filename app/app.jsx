import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Index from 'app.scss'

import Main from 'Main'
import Home from 'Home'
import About from 'About'
import Yoga from 'Yoga'
import Testimonials from 'Testimonials'
import ContactMe from 'ContactMe'
import Gallery from 'Gallery'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="yoga" component={Yoga}/>
			<Route path="testimonials" component={Testimonials}/>
			<Route path="gallery" component={Gallery}/>
			<Route path="contactme" component={ContactMe}/>
			<IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

/*
export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Main />
			</div>
		)
	}
}

const appDOM = document.getElementById('app')
//render() - a function from ReactDOM package
ReactDOM.render(
			<App />, appDOM
);
*/
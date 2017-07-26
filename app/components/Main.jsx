import React from 'react'
import Header from 'Header'
import Nav from 'Nav'
import Footer from 'Footer'

export default class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<Nav/>
				<div className="row">
					<div className="col-xs-12">
						{this.props.children}
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}
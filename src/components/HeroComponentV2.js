import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ReactTypeformEmbed } from 'react-typeform-embed';

export class HeroComponentV2 extends Component {
	render() {
		return (
			<div className="hero-container">
				{this.props.width <= 810 ? (
					<div className="asset-container">
						<h2>diffusion</h2>
					</div>
				) : null}
				<div className="hero-copy">
					<h1>Curate your own corner of the internet</h1>
					<div className="subheading-container">
						<h4>
							Think of Diffusion as a landing page for your
							perspective. Save content from the web and create a
							storyboard to share with your friends and community
							of followers.
						</h4>
						<h4>
							It's a new way to share your opinion on topics that
							interest you, discover new ideas and expand you
							views.
						</h4>
					</div>
					<div className="button-container">
						<Router>
							<Link
								style={{
									backgroundColor: '#00b1d2',
									border: 'none',
									borderRadius: '15px',
									color: 'white',
									cursor: 'pointer',
									fontSize: '20px',
									fontWeight: 'bold',
									outline: 'none',
									padding: '20px',
									textDecoration: 'none',
								}}
								to="/form"
							>
								Become a Curator
							</Link>
							<Switch>
								<Route path="/form">
									<div
										style={{
											zIndex: '10',
											backgroundColor: 'red',
										}}
									>
										<ReactTypeformEmbed url="https://hjv8msq3gnt.typeform.com/to/Gdq3kNQl" />
									</div>
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
				{this.props.width >= 810 ? (
					<div className="asset-container">
						<h2>diffusion</h2>
					</div>
				) : null}
			</div>
		);
	}
}

export default HeroComponentV2;

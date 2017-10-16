import React from 'react';
import ReactDom from 'react-dom';
import '../server/public/scss/style.scss';

const App = class HelloMessage extends React.Component {
	render () {
		return (
			<div className="row">
				<div className="col s12 m12">
					<div className="card">
						<div className="card-image">
							<img src="/server/public/img/jon-snow.jpg"/>
							<span className="card-title">Card Title</span>
							<a className="btn-floating halfway-fab waves-effect waves-light red">
								<i className="material-icons">add</i>
							</a>
						</div>
						<div className="card-content">
							<p>
								I am a very simple card. I am good at containing small bits of information.
								I am convenient because I require little markup to use effectively.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

ReactDom.render(<App />, document.querySelector('.container'));

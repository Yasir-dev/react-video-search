import React from 'react';

class SearchBar extends React.Component {

	state = {searchTerm: ''};

	onInputChange = (event) => {
		this.setState({searchTerm: event.target.value})
			
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.searchTerm);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Search</label>
						<input onChange={this.onInputChange} type="text" value={this.state.searchTerm}/>				
					</div>				
				</form>			
			</div>		
		);
	}
}

export default SearchBar;

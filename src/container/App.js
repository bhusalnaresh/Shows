import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { Shows } from '../components/Shows';
import Github from '../components/view-on-github'

class App extends Component {
	constructor() {
		super()
		this.state = {
			Shows: Shows,
			searchfield:'',
		}
	};
onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
};

	render () {
		const { Shows, searchfield } = this.state;
		const filteredShows = Shows.filter(show => {
			return show.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Shows.length ?

		<h1>LOADING</h1> :
		(
			<div className='tc'>
			<Github />
			<h1 className= "glitch orange" data-text="SHOWSLIST">SHOWSLIST</h1>
			<SearchBox className="br4" searchChange = {this.onSearchChange} />
			<Scroll>
				<CardList Shows={filteredShows}/>
				</Scroll>
			</div>
		);
		}
}

export default App;
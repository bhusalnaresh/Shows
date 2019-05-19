import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='tc'>
	<input className='pa3 ba b--yellow bg-lightest-blue grow'
		type='search' 
		placeholder='Search Shows' 
		onChange={searchChange}
	/>
	</div>
		);
}

export default SearchBox;
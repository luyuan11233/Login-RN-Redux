


import React, {Component} from 'react';
import {Provider} from 'react-redux';
import storer from './store/store';
import AppContainer from './containers/AppContainer';

const store= storer();

export default class index extends Component{
	render(){
		return(
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		)
	}
}
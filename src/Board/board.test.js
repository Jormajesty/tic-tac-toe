import React from 'react'
import Board from './board'
import {shallow} from 'enzyme'

it('should render without breaking', () => {
		shallow(<Board/>);
});
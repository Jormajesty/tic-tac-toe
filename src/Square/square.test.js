import React from 'react'
import Square from './square'
import {shallow} from 'enzyme'

it('should render without breaking', () => {
		shallow(<Square/>);
});
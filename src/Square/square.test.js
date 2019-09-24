import React from "react";
import { expect } from 'chai';
import { shallow, configure, mount } from "enzyme";
import Square from "./square";

const square = shallow(<Square/>);

describe("when rendering the Square", () => {
	it('renders without crashing', () => {
	  shallow(<Square/>);
	});
	it("Square value should turn to 'X' during inital click", () => {
		square.find('button').simulate('click');
		expect(square.props().value).to.equal('X');
  });
});
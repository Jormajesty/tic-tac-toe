import React from "react";
import { shallow, configure, mount } from "enzyme";
import { expect } from 'chai';
import Adapter from "enzyme-adapter-react-16";
import Board from "./Board";
import Square from "../Square/square";

configure({ adapter: new Adapter() });

describe("Board component", () => {
	it('renders without crashing', () => {
	  let squares = Array(9).fill(null);
	  shallow(<Board squares={squares}/>);
	});
	it("Square value should turn to 'X' during inital click", () => {
		let squares = Array(9).fill(null);
		const onClick = jest.fn();
		let boardClick = mount(<Board squares={squares} onClick={onClick}/>);
		let button = boardClick.find('button').first();
		button.simulate('click');
		expect(button.text()).to.equal('X');
  	});
	it("Should prompt player 'X' should go first and O should go second", () => {
		let squares = Array(9).fill(null);
		const onClick = jest.fn();
		let boardInit = mount(<Board squares={squares} onClick={onClick}/>);
		let playerHeader = boardInit.find('h2').first();
		expect(playerHeader.text()).to.equal('Player X is up!');
		let playerTwo =  boardInit.find('button').at(2)
		playerTwo.simulate('click')
		expect(playerHeader.text()).to.equal('Player O is up!');		
  	});	
});
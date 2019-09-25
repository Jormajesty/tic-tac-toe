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
	it("Should prompt player 'X' should go first", () => {
		let squares = Array(9).fill(null);
		const onClick = jest.fn();
		let boardInit = mount(<Board squares={squares} onClick={onClick}/>);
		let playerHeader = boardInit.find('h2').first();
		expect(playerHeader.text()).to.equal('Player X is up!');
  	});	
  	it('Should determines a winner ', () => {
		  const boardWinner = mount(<Board squares={squares} onClick={onClick}/>);

		  const button = boardWinner.find('button.square').first()
		  button.simulate('click')

		  //player 2
		  const turn2 = boardWinner.find('button').at(1)
		  turn2.simulate('click')
		  //player 1
		  const turn3 = boardWinner.find('button').at(4)
		  turn3.simulate('click')
		  //player 2
		  const turn4 = boardWinner.find('button').at(5)
		  turn4.simulate('click')
		  //player 1
		  const turn5 = boardWinner.find('button').at(8)
		  turn5.simulate('click')
		  const winner = boardWinner.find('.gameWinner').children().first().text()
		  expect(winner).to.equal('Winner: X')
	});
});
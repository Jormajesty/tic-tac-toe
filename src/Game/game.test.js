  
import React from "react";
import { expect } from 'chai';
import chai from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import Game from "./game";
import Board from "../Board/board";

const game = shallow(<Game/>);


describe("when rendering the game", () => {
  it("Should Render Game Component", () => {
   		shallow(<Game/>);
  });
  it("Should Render tic tac toe title", () => {
   		const gameTitle = shallow(<Game/>);
		expect(gameTitle.exists('.ticTacToeHeader')).to.equal(true);
  });
  it("Should Render board", () => {
		expect(game.contains(<Board/>)).to.equal(true);
  });
  it("Board should have three rows", () => {
		expect(game.find(Board).dive().find('.board-row')).to.have.lengthOf(3);
  });
  it("Board should have nine squares", () => {
		expect(game.state().squares).toEqual([
	      null,
	      null,
	      null,
	      null,
	      null,
	      null,
	      null,
	      null,
	      null
	    ]);
  });

});
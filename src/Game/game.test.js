  
import React from "react";
import { expect } from 'chai';
import chai from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import Game from "./game";

const game = shallow(<Game />);

describe("when rendering the game", () => {
  it("Should Render Game Component", () => {
   		shallow(<Game />);
  });
  it("Should Render tic tac toe title", () => {
   		const gameTitle = shallow(<Game />);
		expect(gameTitle.exists('.ticTacToeHeader')).to.equal(true);
  });
  it("Should Render board", () => {
		expect(game.exists('<Board/>')).to.equal(true);
  });

});
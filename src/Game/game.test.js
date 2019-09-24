  
import React from "react";
import { shallow, mount, render } from 'enzyme';
import Game from "./game";

const game = shallow(<Game />);

describe("when rendering the game", () => {
  it("Should Render Game Component", () => {
   		shallow(<Game />);
  });
  it("Should Render tic tac toe title", () => {
   		const gameTitle = mount(<Game />);
		expect(gameTitle.equals(<h1 className="ticTacToeHeader" />)).to.equal(true);
  });

});
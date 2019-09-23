import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Board from "./Board";

configure({ adapter: new Adapter() });

const board = shallow(<Board />);

describe("when rendering the board", () => {
  it("renders Board correctly", () => {
    expect(board).toMatchSnapshot();
  });
  it("Board square setUp", () => {
    expect(board.state().squares).toEqual([
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
  it("the board should contain 3 rows", () => {
	expect(board.find(".board-row").length).toEqual(3);
  });
  it("should render all the squares for the board", () => {
    expect(board.find(".boardSquare").exists()).toBeTruthy();
  });
   it("initializes the state with X's turn to play to true", () => {
    expect(board.state().xTurnToPlay).toEqual(true);
  });
});
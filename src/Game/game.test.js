  
import React from "react";
import { shallow, configure } from "enzyme";
import Game from "./Game";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const game = shallow(<Game />);

describe("when rendering the game", () => {
  it("Should Render Game Component", () => {
    expect(game).toMatchSnapshot();
  });
});
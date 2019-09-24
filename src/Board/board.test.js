import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Board from "./Board";

configure({ adapter: new Adapter() });

const board = shallow(<Board />);

describe("Board component", () => {
	it('renders without crashing', () => {
	  let squares = Array(9).fill(null)
	  shallow(<Board squares={squares}/>);
	});

});
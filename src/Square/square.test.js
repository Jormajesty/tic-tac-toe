import React from "react";
import { shallow, configure, mount } from "enzyme";
import Square from "./square";

describe("when rendering the Square", () => {
	it('renders without crashing', () => {
	  shallow(<Square/>);
	});
});
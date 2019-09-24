import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Square from "./square";

configure({ adapter: new Adapter() });

const square = shallow(<Square />);

describe("when rendering the Square", () => {

});
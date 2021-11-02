import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"; // ADAPTER FOR REACT 17 IS STILL NOT AVAILABLE
import { App } from "../src/App";

/**CONFIGURE ENZYME */

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders non empty component without errors", () => {
  // generate wrapper with shallow
  const wrapper = setup();

  // expect(wrapper.exists()).toBe(true);
  const appComponent = findByTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter display start 0", () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("0");
});
test("clicking button increments counter display", () => {});

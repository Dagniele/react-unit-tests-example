import React from "react";
import { rendererWithTheme } from "../../utils/tests";
import Panel from "./Panel";

describe("Panel", () => {
  it("should match the snapshot", () => {
    const tree = rendererWithTheme(<Panel>My content</Panel>);
    expect(tree).toMatchSnapshot();
  });
});

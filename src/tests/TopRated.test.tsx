import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import TopRated from "../components/TopRated";

/**
 * TODO
 */
describe("testing TopRated links", () => {
  test("a WIP test", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Link to="/" />
        <TopRated />
      </Router>,
    );

    screen.getAllByRole("link");

    expect(1).toBe(1);
  });
});

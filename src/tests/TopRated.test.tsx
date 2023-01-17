import { createMemoryHistory } from "@remix-run/router"
import { render, screen } from "@testing-library/react"
import { Router } from "react-router"
import { Link } from "react-router-dom"
import TopRated from "../components/TopRated"

/**
 * TODO
 */
describe('testing TopRated links', () => {
    test('a WIP test', () => {
        const history = createMemoryHistory();

        const { getByText } = render(
            <Router location={history.location} navigator={history}>
                <Link to='/'></Link>
                <TopRated />
            </Router>
        );

        const links: HTMLAnchorElement[] = screen.getAllByRole("link")

        expect(1).toBe(1)
    })
})
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'
import App from "./App"
import Detail from './components/Detail'
import TopRated from './components/TopRated'

jest.mock('./components/TopRated')
jest.mock('./components/Detail')

describe('testing App routes', () => {

  const mockTopRated = TopRated as jest.MockedFunction<typeof TopRated>;
  const mockDetail = Detail as jest.MockedFunction<typeof Detail>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockTopRated.mockImplementation(() => <div data-testid='TEST_ID_TOP_RATED' />);
    mockDetail.mockImplementation(() => <div data-testid='TEST_ID_DETAIL' />);
  });

  test('WHEN user is in index route (/) THEN render TopRated component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("TEST_ID_TOP_RATED")).toBeInTheDocument();
  })
  
  test('WHEN user is in index route (/detail/{id}) THEN render Detail component', () => {
    render(
      <MemoryRouter initialEntries={['/detail/123']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("TEST_ID_DETAIL")).toBeInTheDocument();
  })
})

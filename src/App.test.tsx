import { createRenderer } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router'
import App from './App'

describe('testing App routes', function () {

  test('should display pass in number', function () {

    let renderer = createRenderer()
    renderer.render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    let actualElement = renderer.getRenderOutput()
    let expectedElement = <div>John</div>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})

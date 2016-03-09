import {createMemoryHistory} from 'react-router'
import App from 'components/app'
import {render} from 'utils/test'

describe('App', function () {
  beforeEach(function () {
    const history = createMemoryHistory('/foreground.html?url=Zm9v&rows=3&cols=3')
    this.element = render(<App history={history} />)
  })

  it('renders', function () {
    expect(this.element).toHaveTag('div')
  })
})

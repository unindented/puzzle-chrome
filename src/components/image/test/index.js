import Image from 'components/image'
import {render} from 'utils/test'
import fixture from './image.svg'

describe('Image', function () {
  describe('without an image', function () {
    beforeEach(function () {
      this.element = render(<Image url={fixture} />)
    })

    it('renders with the correct class name', function () {
      expect(this.element).toHaveClass('app-image')
    })

    it('renders with the correct text', function () {
      const message = this.element.querySelector('.app-image__message')
      expect(message).toHaveText('msg_image_state_loading')
    })
  })

  describe('with an image', function () {
    beforeEach(function () {
      const image = new Image()
      this.element = render(<Image url={fixture} image={image} />)
    })

    it('renders with the correct class name', function () {
      expect(this.element).toHaveClass('app-image')
    })

    it('renders with the correct text', function () {
      const message = this.element.querySelector('.app-image__message')
      expect(message).toHaveText('msg_image_state_finished')
    })
  })
})

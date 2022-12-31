import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main /', () => {
  it('render test', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React avançado/i })
    ).toBeInTheDocument()
  })

  it('render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
  })
})

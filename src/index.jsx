import React from 'react'
import ReactDOM from 'react-dom'
import { Rnd } from 'react-rnd'

import './style.scss'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      width: 140,
      height: 100,
      x: 100,
      y: 100
    }
  }

  render () {
    return (
      <div className='layout'>
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: 100,
            height: 100
          }}
          minWidth={10}
          minHeight={10}
          lockAspectRatio
        >
          test
        </Rnd>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

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
        <Rnd default={{ x: 350, y: 125, width: 300 }} minWidth={10} minHeight={10} lockAspectRatio>
          <img src='/objects/table2.png' alt='' draggable='false' />
        </Rnd>

        <Rnd default={{ x: 430, y: 90, width: 90 }} minWidth={10} minHeight={10} lockAspectRatio>
          <img src='/objects/imac.png' alt='' draggable='false' />
        </Rnd>

        <Rnd default={{ x: 490, y: 200, width: 90 }} minWidth={10} minHeight={10} lockAspectRatio>
          <img src='/objects/keyboard.png' alt='' draggable='false' />
        </Rnd>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

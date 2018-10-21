import React from 'react'
import ReactDOM from 'react-dom'
import { Rnd } from 'react-rnd'

import './style.scss'
import objectsList from './objectsList'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='objects'>
          {
            objectsList.map((objectName, key) => {
              return (
                <img key={key} src={`objects/${objectName}.png`} alt={objectName} />
              )
            })
          }
        </div>

        <div className='scene'>
          <Rnd default={{ x: 350, y: 155, width: 300 }} minWidth={10} minHeight={10} lockAspectRatio>
            <img src='objects/table2.png' alt='' draggable='false' />
          </Rnd>

          <Rnd default={{ x: 430, y: 120, width: 90 }} minWidth={10} minHeight={10} lockAspectRatio>
            <img src='objects/imac.png' alt='' draggable='false' />
          </Rnd>

          <Rnd default={{ x: 490, y: 230, width: 90 }} minWidth={10} minHeight={10} lockAspectRatio>
            <img src='objects/keyboard.png' alt='' draggable='false' />
          </Rnd>
        </div>

        <div className='footer'>
          Original images: <a href='https://isometriclove.com/' target='_blank'>isometriclove.com</a><br />
          Source of this tool: <a href='https://github.com/ozgrozer/ildt' target='_blank'>github.com/ozgrozer/ildt</a><br />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

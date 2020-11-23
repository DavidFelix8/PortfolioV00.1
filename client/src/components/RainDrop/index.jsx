import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'

class RainDrop extends Component {
  render () {
    return (
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    )
  }
}

export default RainDrop;
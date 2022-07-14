import React, { Component } from 'react'
import loading from '../assets/loader.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='Loadoing'/>
      </div>
    )
  }
}

export default Spinner

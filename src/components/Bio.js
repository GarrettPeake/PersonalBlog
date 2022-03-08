import React from 'react'
import styles from './Bio.module.css'
import flowChart from './flowchart.jpg'

function Bio(props) {

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <p>
        I'm making a tilting plane, or gravity tilt game. Using an I2C accelerometer and an SPI LCD display along with the NUCLEO board, the user will
        tilt the device to control a virtual ball on the display, the target is to navigate the ball into a goal 'hole' while avoiding the numerous 'pits.'
        <br />
        I'm working alone on this project.
      </p>
      <img src={flowChart} alt="flowChart" />
    </div>
  )
}

export default Bio

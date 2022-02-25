import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "gepeake@gmail.com",
    size: 64,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Currently just the groundwork for an eventual portfolio site
        <br />
        Visit my GitHub at{' '}
        <a href="https://www.github.com/GarrettPeake">GarrettPeake</a>.
        <br />
      </p>
    </div>
  )
}

export default Bio

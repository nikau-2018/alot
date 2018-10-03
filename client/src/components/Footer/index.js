import React from 'react'
import {Icon} from 'semantic-ui-react'

import styles from './styles.css'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <h3><Icon name='warehouse' /> Auckland Library of Tools</h3>
      <p className={styles.p}><Icon name='location arrow' /> Grey Lynn, Auckland</p>
      <a href="https://www.facebook.com/AucklandLibraryofTools/">
        <Icon name='facebook' /> AucklandLibraryofTools
      </a><br /><br />
      <a href="mailto:aucklandtoollibrary@gmail.com">
        <Icon name='mail' /> aucklandtoollibrary@gmail.com
      </a>
    </div>
  )
}

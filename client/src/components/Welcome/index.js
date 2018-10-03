import React from 'react'

import People from './People'
import About from './About'
import Member from './Member'
import Map from './Map'

import styles from './styles.css'

export default function Welcome () {
  return (
    <div className={styles.welcome}>
      <div className={styles.padding}>
        <div className={styles.hero} >
          <div className={styles.herotext}>
            <h1 className={styles.herotext}>The Auckland Library of Tools</h1>
          </div>
        </div>
      </div>
      <About />
      <Member />
      <People />
      <Map />
    </div>
  )
}

import React from 'react'

import {Image, Grid, Divider} from 'semantic-ui-react'

import styles from './styles.css'

export default function Map () {
  return (
    <div className={styles.map}>
      <div className={styles.about}>
        <h2 className={styles.h2}>Address</h2>
        <p className={styles.p}>11 Example Street</p>
        <p className={styles.p}>Grey Lynn</p>
        <p className={styles.p}>Auckland</p>
      </div>
      <div className={styles.about}>
        <h2 className={styles.h2}>Hours</h2>
        <p className={styles.p}>Saturday 11am-3pm</p>
        <p className={styles.p}>Sunday 11am-3pm</p>
      </div>
      <div>
        <Image className={styles.image} src={'/grey-lynn.jpg'}size='large'/>
      </div>
    </div>
  )
}

import React from 'react'

import {Image, Grid, Divider} from 'semantic-ui-react'

import styles from './styles.css'

export default function Map () {
  return (
    <div className={styles.map}>
      <Divider />
      <Grid stackable>
        <Grid.Column width={5}>
          <h2 className={styles.h2}>Address</h2>
          <p className={styles.p}>11 Example Street</p>
          <p className={styles.p}>Grey Lynn</p>
          <p className={styles.p}>Auckland</p>
        </Grid.Column>
        <Grid.Column width={5}>
          <h2 className={styles.h2}>Hours</h2>
          <p className={styles.p}>Saturday 11am-3pm</p>
          <p className={styles.p}>Sunday 11am-3pm</p>
        </Grid.Column>
        <Grid.Column width={5}>
          <Image className={styles.image} src={'/grey-lynn.jpg'}size='large'/>
        </Grid.Column>
      </Grid>
    </div>
  )
}

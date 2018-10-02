import React from 'react'

import {Image, Grid, Divider} from 'semantic-ui-react'

import styles from './styles.css'

export default function About () {
  return (
    <div className={styles.about}>
    <Divider />
    <Grid stackable>
        <Grid.Column width={6}>
        <Image className={styles.image} src={'/alot-logo.png'} />
    </Grid.Column>
    <Grid.Column width={10}>
    <div className={styles.text}>
    <h1 className={styles.h1}>About ALoT</h1>
        <p className={styles.p}>Auckland Library of Tools (ALoT) is a community hub that provides access to high quality and well maintained tools and equipment.
        The hub consists of a well stocked “library”, a storage and repair space and a makerspace where members can attend workshops, learn, collaborate and share
        resources and ideas. 
            </p>
            </div>
        </Grid.Column>
    </Grid>
    </div>
  )
}

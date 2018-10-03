import React from 'react'

import {Image, Grid, Divider} from 'semantic-ui-react'

import styles from './styles.css'

export default function About () {
  return (
    <div className={styles.about}>
      <Divider />
      <Grid stackable>
        <Grid.Column width={6}>
          <img className={styles.image} src={'/tools.jpg'}/>
        </Grid.Column>
        <Grid.Column width={10}>
          <h1 className={styles.h1}>About ALoT</h1>
          <p className={styles.p}>Auckland Library of Tools (ALoT) is a community hub that provides access to high quality and well maintained tools and equipment. The hub consists of a well stocked “library”, a storage and repair space and a makerspace where members can attend workshops, learn, collaborate and share resources and ideas.</p>
          <p className={styles.p}>The dominant economic model encourages ownership and discourages sharing. Tools rarely used, gather dust. Objects with owners, but no users, fall into disrepair. Overproduction has become the norm, while disused but perfectly functional items slowly make their way to landfill. All the while, people and projects without funds or equipment fail to get off the ground. ALoT offers a better way; one based on the provision of shared resources, and a reduction of the wasteful and widespread communal hoarding of objects. </p>
        </Grid.Column>
      </Grid>
    </div>
  )
}

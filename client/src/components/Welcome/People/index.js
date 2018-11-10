import React from 'react'

import {Image, Grid, Icon} from 'semantic-ui-react'

import styles from './styles.css'

export default function People () {
  return (
    <div className={styles.people}>
      <h1 className={styles.h1}>Meet the Team</h1>
      <Grid stackable columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <h2 className={styles.h2}>Amanda Chapman</h2>
            <Image className={styles.image} src={'/people/amanda.jpg'} circular/>
            <p className={styles.p}>
              Amanda Chapman​ established the Auckland Community Fridge, NZ’s first free food sharing fridge. She blogs about waste reduction and her tiny house build. Amanda works for We Compost and United Sustainable Sisters (part of Tamaki WRAP). She has completed a PGDipSci in Environmental Science and Geography.
            </p>
            <a href="http://www.wastefreeland.nz" target="_blank" className={styles.email}>
              <Icon name='rss' /> www.wastefreeland.nz
            </a>
            <br></br>
            <a href="mailto:amandawastefree@gmail.com" className={styles.email}>
              <Icon name='mail' /> amandawastefree@gmail.com
            </a>
          </Grid.Column>
          <Grid.Column>
            <h2 className={styles.h2}>Tom Greer</h2>
            <Image className={styles.image} src={'/people/tomGreer.jpg'} circular/>
            <p className={styles.p}>
              Tom Greer​ studies Landscape Architecture, and has worked in ecology and environmental science. He has a passion for the natural world, design and social systems. Tom previously studied biology and statistics, and has completed a BA(Hons) and PGDipSci. He also has several years experience working in libraries of books (libraries).
            </p>
            <a href="mailto:tza.greer@gmail.com" className={styles.email}>
              <Icon name='mail' /> tza.greer@gmail.com
            </a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    </div>
  )
}

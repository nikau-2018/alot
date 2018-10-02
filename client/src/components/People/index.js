import React from 'react'

import {Image, Divider, Grid, Segment, Icon} from 'semantic-ui-react'

import styles from './styles.css'

export default function People () {
  return (
    <div className={styles.people}>
    <h1 className={styles.h1}>Meet the Team</h1>
      <Grid columns={2} divided>
        <Grid.Column>
            <h2 className={styles.h2}>Amanada Chapman</h2>
            <Image className={styles.image} src={'/people/amanda.jpg'} size='medium' circular/>
            <p className={styles.p}>Amanda Chapman​ established the Auckland Community Fridge, NZ’s first free food sharing fridge. Amanda blogs about waste reduction and her tiny 
              house build. Amanda works for We Compost and United Sustainable Sisters (part of Tamaki WRAP). Amanda has completed a PGDipSci in Environmental 
              Science and Geography.</p>
            <p><Icon name='mail' />amandawastefree@gmail.com</p>
        </Grid.Column>
        <Grid.Column>
            <h2 className={styles.h2}>Tom Greer</h2>
            <Image className={styles.image} src={'/people/tomGreer.jpg'} size='medium' circular/>
            <p className={styles.p}>Tom Greer​ studies Landscape Architecture, and has worked in ecology and environmental science. He has a passion for the natural world, design and 
              social systems. Tom previously studied biology and statistics, and has completed a BA(Hons) and PGDipSci. He also has several years experience 
              working in libraries of books (libraries)</p>
            <p><Icon name='mail' />tza.greer@gmail.com</p>
        </Grid.Column>
      </Grid>
      </div>
  )
}

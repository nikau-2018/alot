import React from 'react'
import {Image, Divider} from 'semantic-ui-react'

import garageBanner from './garage-banner.jpg'
import People from '../People'
import About from '../About'
import Member from '../Member'
import Banner from '../Banner'

import styles from './styles.css'

export default function Welcome () {
  return (
    <div className='welcome'>
      <div className={styles.padding}>
        <Image src={garageBanner} fluid />
      </div>
      <Banner />
      <About />
      <Member />
      <People />
    </div>
  )
}

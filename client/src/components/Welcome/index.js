import React from 'react'
import {Image, Divider} from 'semantic-ui-react'

import garageBanner from './garage-banner.jpg'
import People from '../People'
import About from '../About'

import styles from './styles.css'

export default function Welcome () {
  return (
    <div className='welcome'>
      <Image src={garageBanner} fluid />
      <h1>Welcome to the Auckland Library of Tools!</h1>
      <h2>Coming soon...</h2>
      <p>
        The Auckland Library of tools will provide members with access to high quality and well maintained tools and equipment.
      </p>
      <p>
        The hub will consist of a well stocked “library”, a storage and repair space, and a makerspace where members can attend workshops, learn, collaborate, meet, as well as share resources and ideas.
      </p>
      <Divider />
      <About />
      <People />
    </div>
  )
}

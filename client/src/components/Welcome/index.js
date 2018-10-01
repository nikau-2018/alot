import React from 'react'
import {Image, Divider} from 'semantic-ui-react'

import garageBanner from './garage-banner.jpg'
import About from '../About'

import styles from './styles.css'

export default function Welcome () {
  return (
    <div className='welcome'>
      <div className={styles.padding}>
        <Image src={garageBanner} fluid />
      </div>
      <h1>Welcome to the Auckland Library of Tools!</h1>
      <h2>Coming soon...</h2>
      <p>
        The Auckland Library of tools will provide members with access to high quality and well maintained tools and equipment.
      </p>
      <p>
        The hub will consist of a well stocked “library”, a storage and repair space, and a makerspace where members can attend workshops, learn, collaborate, meet, as well as share resources and ideas.
      </p>
      <Divider />
      <h2>About</h2>
      <p>
        The dominant economic model encourages ownership and discourages sharing. Tools rarely used, gather dust. Objects with owners, but no users, fall into disrepair. Overproduction has become the norm, while disused but perfectly functional items slowly make their way to landfill. All the while, people and projects without funds or equipment fail to get off the ground. ALoT offers a better way; one based on the provision of shared resources, and a reduction of the wasteful and widespread communal hoarding of objects.
      </p>
      <About />
    </div>
  )
}

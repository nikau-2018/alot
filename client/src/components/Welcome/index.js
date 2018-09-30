import React from 'react'
import {Image, Divider} from 'semantic-ui-react'

import logo from './alot-logo.png'
import garageImage from './garage-banner2.png'

import styles from './styles.css'

export default function Welcome () {
  return (
    <div className='welcome'>
      <Image src={logo} size='massive'/>
      <Image src={garageImage} size='massive'/>
      <h1>Welcome!</h1>
      <p>
        The Auckland Library of tools provides members with access to high quality and well maintained tools and equipment.
      </p>
      <Divider />
      <h2>About</h2>
      <p>
        The dominant economic model encourages ownership and discourages sharing. Tools rarely used, gather dust. Objects with owners, but no users, fall into disrepair. Overproduction has become the norm, while disused but perfectly functional items slowly make their way to landfill. All the while, people and projects without funds or equipment fail to get off the ground. ALoT offers a better way; one based on the provision of shared resources, and a reduction of the wasteful and widespread communal hoarding of objects.
      </p>
      <p>
      The Auckland Library of Tools provides members with access to high quality and well maintained tools and equipment. The hub will consist of a well stocked “library”, a storage and repair space, and a makerspace where members can attend workshops, learn, collaborate, meet, as well as share resources and ideas.
      </p>
    </div>
  )
}

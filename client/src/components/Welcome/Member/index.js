import React from 'react'

import {Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function Member () {
  return (
    <div className={styles.member}>
      <h1 className={styles.h1}>Become a Member</h1>
      <p className={styles.p}>Any person over the age of 18 is welcome to become a member of the Auckland Library of Tools. The membership
        fee is $40 for a year and this fee can be paid to a staff memeber the first time you collect a tool.
      </p>
      <p className={styles.p}>
        The library is staffed by knowledgeable people who are able to advise members and ensure the proper maintenance of equipment.
      </p>
      <p className={styles.p}>All profits are cycled back into the library and cover maintenace, repairs and new tools. We consult
        with the community, and provide resources that appeal to and service a broad cross-section of people.</p>
      <Button as={Link} to='/login' className={styles.button} size='huge'>Create an Account</Button>
    </div>
  )
}

import React from 'react'

import {Button, Divider} from 'semantic-ui-react'

import styles from './styles.css'

export default function Member () {
  return (
    <div className={styles.member}>
    <Divider />
    <h1 className={styles.h1}>Become a Member</h1>
    <p className={styles.p}>Any person over the age of 18 is welcome to use the Auckland Library of Tools.  
      </p>
      <p className={styles.p}>
      The membership fee is $40 for a year, or $25 for 6 months. This can be paid to a staff memeber the first time you 
      collect a tool.
      </p>
      <p className={styles.p}> All profits will be cycled back into the library and will cover maintenace, repairs and new tools.</p>
      <Button className={styles.button} size='huge'>Create an Account</Button>
      </div>
  )
}
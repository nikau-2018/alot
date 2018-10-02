import React from 'react'

import {Image, Divider, Grid, Segment} from 'semantic-ui-react'

export default function About () {
  return (
    <div>
      <h2>People</h2>
      <Grid columns={2}>
        <Grid.Column>
          <Segment basic>
            <h4>Amanada Chapman</h4>
            <p>Info</p>
            <Image src={`http://www.placepuppy.net/400/250`} />
          </Segment>
        </Grid.Column>
        <Divider vertical></Divider>
        <Grid.Column>
          <Segment basic>
            <h4>Tom Greer</h4>
            <p>Info</p>
            <Image src={`http://www.placepuppy.net/400/250`} />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}
